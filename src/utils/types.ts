export type CloudinaryImg = {
  asset_id: string;
  public_id: string;
  asset_folder: string;
  filename: string;
  display_name: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  uploaded_at: string;
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: string;
  access_mode: string;
  etag: string;
  created_by: { access_key: string };
  uploaded_by: { access_key: string };
};
