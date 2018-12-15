import { Document } from 'mongoose';
import { EPublishState } from '@app/interfaces/state.interface';

export interface IAnnouncement extends Document {
  readonly content: string;
  readonly state: EPublishState;
  readonly create_at: Date;
  readonly update_at: Date;
}