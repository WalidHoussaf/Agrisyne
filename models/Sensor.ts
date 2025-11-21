import mongoose, { Document, Schema, Model } from 'mongoose';

export interface ISensor extends Document {
  _id: string;
  sensorId: string; // Unique device identifier
  field: mongoose.Types.ObjectId;
  type: 'soil-moisture' | 'temperature' | 'humidity' | 'ph' | 'light' | 'rainfall';
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  status: 'active' | 'inactive' | 'maintenance' | 'error';
  manufacturer?: string;
  modelName?: string;
  installDate: Date;
  lastReading?: Date;
  batteryLevel?: number; // 0-100 percentage
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const SensorSchema = new Schema<ISensor>(
  {
    sensorId: {
      type: String,
      required: [true, 'Sensor ID is required'],
      unique: true,
      trim: true,
    },
    field: {
      type: Schema.Types.ObjectId,
      ref: 'Field',
      required: [true, 'Field reference is required'],
    },
    type: {
      type: String,
      required: [true, 'Sensor type is required'],
      enum: ['soil-moisture', 'temperature', 'humidity', 'ph', 'light', 'rainfall'],
    },
    name: {
      type: String,
      required: [true, 'Sensor name is required'],
      trim: true,
    },
    location: {
      latitude: {
        type: Number,
        required: [true, 'Latitude is required'],
        min: -90,
        max: 90,
      },
      longitude: {
        type: Number,
        required: [true, 'Longitude is required'],
        min: -180,
        max: 180,
      },
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'maintenance', 'error'],
      default: 'active',
    },
    manufacturer: {
      type: String,
      trim: true,
    },
    modelName: {
      type: String,
      trim: true,
    },
    installDate: {
      type: Date,
      required: [true, 'Install date is required'],
      default: Date.now,
    },
    lastReading: {
      type: Date,
    },
    batteryLevel: {
      type: Number,
      min: 0,
      max: 100,
    },
    metadata: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

const Sensor: Model<ISensor> = mongoose.models.Sensor || mongoose.model<ISensor>('Sensor', SensorSchema);

export default Sensor;
