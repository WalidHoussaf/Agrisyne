import mongoose, { Document, Schema, Model } from 'mongoose';

export interface ISensorReading extends Document {
  _id: string;
  sensor: mongoose.Types.ObjectId;
  field: mongoose.Types.ObjectId;
  timestamp: Date;
  value: number;
  unit: string;
  quality: 'good' | 'fair' | 'poor';
  metadata?: {
    temperature?: number;
    humidity?: number;
    signalStrength?: number;
    [key: string]: any;
  };
  createdAt: Date;
}

const SensorReadingSchema = new Schema<ISensorReading>(
  {
    sensor: {
      type: Schema.Types.ObjectId,
      ref: 'Sensor',
      required: [true, 'Sensor reference is required'],
      index: true,
    },
    field: {
      type: Schema.Types.ObjectId,
      ref: 'Field',
      required: [true, 'Field reference is required'],
      index: true,
    },
    timestamp: {
      type: Date,
      required: [true, 'Timestamp is required'],
      default: Date.now,
      index: true,
    },
    value: {
      type: Number,
      required: [true, 'Sensor value is required'],
    },
    unit: {
      type: String,
      required: [true, 'Unit is required'],
      trim: true,
    },
    quality: {
      type: String,
      enum: ['good', 'fair', 'poor'],
      default: 'good',
    },
    metadata: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

// Compound index for efficient queries
SensorReadingSchema.index({ sensor: 1, timestamp: -1 });
SensorReadingSchema.index({ field: 1, timestamp: -1 });

const SensorReading: Model<ISensorReading> =
  mongoose.models.SensorReading || mongoose.model<ISensorReading>('SensorReading', SensorReadingSchema);

export default SensorReading;
