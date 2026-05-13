import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'


import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable