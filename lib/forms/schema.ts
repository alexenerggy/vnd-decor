import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.string().min(6, "Введите телефон"),
  email: z.string().email("Введите корректный email").optional().or(z.literal("")),
  message: z.string().min(10, "Опишите задачу подробнее"),
  service: z.string().optional(),
  website: z.string().max(0, "Spam detected")
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
