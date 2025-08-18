import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { z } from "zod";
import { HTTPSTATUS } from "../config/http.config";
import { joinWorkspaceByInviteService } from "../services/member.service";

export const joinWorkspaceController = asyncHandler(
  async (req: Request, res: Response) => {
    // Validate inviteCode
    const inviteCode = z.string().parse(req.params.inviteCode);

    // Validate userId
    const userId = req.user?._id;
    if (!userId) {
      return res.status(HTTPSTATUS.UNAUTHORIZED).json({
        message: "User is not authenticated",
      });
    }

    try {
      // Call the service to join the workspace
      const { workspaceId, role } = await joinWorkspaceByInviteService(
        userId,
        inviteCode
      );

      // Return success response
      return res.status(HTTPSTATUS.OK).json({
        message: "Successfully joined the workspace",
        workspaceId,
        role,
      });
    } catch (error: any) {
      // Handle errors from the service
      return res.status(HTTPSTATUS.BAD_REQUEST).json({
        message: error.message || "Failed to join the workspace",
      });
    }
  }
);