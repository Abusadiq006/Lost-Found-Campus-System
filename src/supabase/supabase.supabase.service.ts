import { Inject, Injectable, OnModuleInit } from '@nestjs/common'

@Injectable()
export class SupabaseService implements OnModuleInit {
    constructor(
        @Inject('SUPABASE_CLIENT')
        private readonly supabase,
    ) {}

    async onModuleInit() {
        const { data, error } = await this.supabase
    }
}