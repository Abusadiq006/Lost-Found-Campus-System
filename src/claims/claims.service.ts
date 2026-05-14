import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { SupabaseService } from '../supabase/supabase.service';

import { CreateClaimDto } from './dto/create-claim.dto';
import {
  ClaimDecision,
  ReviewClaimDto,
} from './dto/review-claim.dto';

@Injectable()
export class ClaimsService {
  constructor(
    private readonly supabaseService: SupabaseService,
  ) {}

  async createClaim(
    itemId: string,
    claimantId: string,
    dto: CreateClaimDto,
  ) {
    const supabase =
      this.supabaseService.getClient();

    const { data: item } = await supabase
      .from('items')
      .select('*')
      .eq('id', itemId)
      .single();