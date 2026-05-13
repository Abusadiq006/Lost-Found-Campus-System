import { Inject, Injectable, OnModuleInit } from '@nestjs/common'

@Injectable()
export class SupabaseService implements OnModuleInit {
    constructor(
        @Inject('SUPABASE_CLIENT')
        private readonly supabase,
    ) {}
}