import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "../config/s3";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const uploadFileToS3 = async (
  file: Express.Multer.File,
  userId: string,
): Promise<string> => {
  const sanitizedFileName = file.originalname
    .toLowerCase()
    .replace(/[^a-z0-9.]/g, "-");

  const s3Key = `${userId}/${Date.now()}-${sanitizedFileName}`;

  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: s3Key,
      Body: file.buffer,
      ContentType: file.mimetype,
    }),
  );

  return s3Key;
};

export const deleteFileFromS3 = async (s3Key: string): Promise<void> => {
  await s3.send(
    new DeleteObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: s3Key,
    }),
  );
};

export const generateDownloadUrl = async (s3Key: string): Promise<string> => {
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: s3Key,
  });

  const signedUrl = await getSignedUrl(s3, command, {
    expiresIn: 300,
  });

  return signedUrl;
};
