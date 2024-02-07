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
  OrgCreate = "ORG_CREATE",

  ProjectCreate = "PROJECT_CREATE",
  ProjectNftBatch = "PROJECT_NFT_BATCH",
  ProjectSftBatch = "PROJECT_SFT_BATCH",
  ProjectNftBurn = "PROJECT_NFT_BURN",
  ProjectNftRevoke = "PROJECT_NFT_REVOKE",
  ProjectNftUpdate = "PROJECT_NFT_UPDATE",
  ProjectRoyaltiesWithdraw = "PROJECT_ROYALTIES_WITHDRAW",
  ProjectUpdate = "PROJECT_UPDATE",

  ProjectNftCreate = "PROJECT_NFT_CREATE",
  ProjectSftCreate = "PROJECT_SFT_CREATE",
  ProjectNftTransfer = "PROJECT_NFT_TRANSFER",
  ProjectAssetBurn = "PROJECT_ASSET_BURN",
  ProjectAssetUpdate = "PROJECT_ASSET_UPDATE",

  ShopCreate = "SHOP_CREATE",
  DustCreate = "DUST_CREATE",

  NonTransferableProjectCreate = "NON_TRANSFERABLE_PROJECT_CREATE",
  TransferableProjectCreate = "TRANSFERABLE_PROJECT_CREATE",
  TransferableProjectNftCreate = "TRANSFERABLE_PROJECT_NFT_CREATE",

  InscriptionCreate = "INSCRIPTION_CREATE",

  TokenCreate = "TOKEN_CREATE",
  TokenRenounce = "TOKEN_RENOUNCE",
  TokenMint = "TOKEN_MINT",
}

export const transactionTypesEnumSchema = z.nativeEnum(TransactionTypesEnum);

export enum IntegrationsEnum {
  Square = "square",
}

export const integrationsEnumSchema = z.nativeEnum(IntegrationsEnum);
