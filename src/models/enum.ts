import { z } from "zod";

export enum NetworkEnum {
  Devnet = "DEVNET",
  Localnet = "LOCALNET",
  Mainnet = "MAINNET",
}
export const networkEnumSchema = z.nativeEnum(NetworkEnum);

export enum PlansEnum {
  Developer = "DEVELOPER",
  Enterprise = "ENTERPRISE",
  Free = "FREE",
  Starter = "STARTER",
  Hobby = "HOBBY",
}

export const plansEnumSchema = z.nativeEnum(PlansEnum);

export enum StatusEnum {
  Burned = "burned",
  Confirmed = "confirmed",
  Failed = "failed",
  Pending = "pending",
  Processing = "processing",
}

export const statusEnumSchema = z.nativeEnum(StatusEnum);

export enum TransactionTypesEnum {
  CollectionAdd = "COLLECTION_ADD",
  CollectionCreate = "COLLECTION_CREATE",
  CollectionCreateDeprecated = "COLLECTION_CREATE_DEPRECATED",
  CompressedProjectCreate = "COMPRESSED_PROJECT_CREATE",
  CompressedProjectNftBatch = "COMPRESSED_PROJECT_NFT_BATCH",
  CompressedProjectNftCreate = "COMPRESSED_PROJECT_NFT_CREATE",
  CompressedProjectSftBatch = "COMPRESSED_PROJECT_SFT_BATCH",
  CompressedProjectSftCreate = "COMPRESSED_PROJECT_SFT_CREATE",
  ManagedNftRevoke = "MANAGED_NFT_REVOKE",
  NftCreate = "NFT_CREATE",
  NftUpdate = "NFT_UPDATE",
  OrgCreate = "ORG_CREATE",
  OrgMemberAdd = "ORG_MEMBER_ADD",
  ProjectCreate = "PROJECT_CREATE",
  ProjectRoyaltiesWithdraw = "PROJECT_ROYALTIES_WITHDRAW",
  ProjectNftCreate = "PROJECT_NFT_CREATE",
  ProjectSftCreate = "PROJECT_SFT_CREATE",
  ProjectNftBatch = "PROJECT_NFT_BATCH",
  ProjectSftBatch = "PROJECT_SFT_BATCH",
  ProjectNftBurn = "PROJECT_NFT_BURN",
  ProjectNftRevoke = "PROJECT_NFT_REVOKE",
  ProjectNftUpdate = "PROJECT_NFT_UPDATE",
  ProjectUpdate = "PROJECT_UPDATE",
  ProjectNftTransfer = "PROJECT_NFT_TRANSFER",
  ProjectAssetBurn = "PROJECT_ASSET_BURN",
  ShopCreate = "SHOP_CREATE",
  DustCreate = "DUST_CREATE",
  NonTransferableProjectCreate = "NON_TRANSFERABLE_PROJECT_CREATE",
  TransferableProjectCreate = "TRANSFERABLE_PROJECT_CREATE",
  TransferableProjectNftCreate = "TRANSFERABLE_PROJECT_NFT_CREATE",
}

export const transactionTypesEnumSchema = z.nativeEnum(TransactionTypesEnum);

export enum IntegrationsEnum {
  Square = "square",
}

export const integrationsEnumSchema = z.nativeEnum(IntegrationsEnum);
