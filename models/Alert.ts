import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IAlert extends Document {
  _id: string;
  user: mongoose.Types.ObjectId;
  field: mongoose.Types.ObjectId;
  sensor?: mongoose.Types.ObjectId;
  type: 'critical' | 'warning' | 'info';
  category: 'moisture' | 'temperature' | 'humidity' | 'device' | 'general';
  title: string;
  message: string;
  threshold?: {
    parameter: string;
    operator: 'above' | 'below' | 'equal';
    value: number;
    unit: string;
  };
  actualValue?: number;
  status: 'active' | 'acknowledged' | 'resolved';
  acknowledgedAt?: Date;
  resolvedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const AlertSchema = new Schema<IAlert>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User reference is required'],
      index: true,
    },
    field: {
      type: Schema.Types.ObjectId,
      ref: 'Field',
      required: [true, 'Field reference is required'],
      index: true,
    },
    sensor: {
      type: Schema.Types.ObjectId,
      ref: 'Sensor',
    },
    type: {
      type: String,
      required: [true, 'Alert type is required'],
      enum: ['critical', 'warning', 'info'],
    },
    category: {
      type: String,
      required: [true, 'Alert category is required'],
      enum: ['moisture', 'temperature', 'humidity', 'device', 'general'],
    },
    title: {
      type: String,
      required: [true, 'Alert title is required'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Alert message is required'],
      trim: true,
    },
    threshold: {
      parameter: String,
      operator: {
        type: String,
        enum: ['above', 'below', 'equal'],
      },
      value: Number,
      unit: String,
    },
    actualValue: {
      type: Number,
    },
    status: {
      type: String,
      enum: ['active', 'acknowledged', 'resolved'],
      default: 'active',
      index: true,
    },
    acknowledgedAt: {
      type: Date,
    },
    resolvedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Alert: Model<IAlert> = mongoose.models.Alert || mongoose.model<IAlert>('Alert', AlertSchema);

export default Alert;
