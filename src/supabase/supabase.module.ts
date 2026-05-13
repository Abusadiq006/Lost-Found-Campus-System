import { Module } from '@nestjs/common'
import { SupabaseProvider } from './supabase.provider'

import { SupabaseService } from './supabase.service'
@Module({
    providers: [SupabaseProvider],
    exports: [SupabaseProvider],
})
export class SupabaseModule {}