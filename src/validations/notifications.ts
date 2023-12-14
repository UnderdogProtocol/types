import React from "react";
import { z } from "zod";

export enum NotificationTypeEnum {
  email = "EMAIL",
}

export enum NotificationSubTypeEnum {
  lowCredits = "LOW_CREDITS",
  welcome = "WELCOME",
}

const notificationType = z.nativeEnum(NotificationTypeEnum);

const notificationSubType = z.nativeEnum(NotificationSubTypeEnum);

const notificationSchema = z.object({
  type: notificationType,
  subType: notificationSubType,
  to: z.array(z.string()),
  data: z.any().optional(),
});

export type NotificationSchema = z.infer<typeof notificationSchema>;

export type SendEmailSchema = {
  to: string[];
  subject: string;
  bodyComponent: React.ReactNode;
};
