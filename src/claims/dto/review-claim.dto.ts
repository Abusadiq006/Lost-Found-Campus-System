
export class CreateClaimDto {
  @IsOptional()
  @IsString()
  message?: string;
}