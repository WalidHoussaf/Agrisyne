import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IField extends Document {
  _id: string;
  name: string;
  farm: mongoose.Types.ObjectId;
  cropType: string;
  area: number; // in hectares
  soilType?: string;
  boundary: {
    type: 'Polygon';
    coordinates: number[][][]; // GeoJSON format
  };
  status: 'active' | 'fallow' | 'preparation';
  plantingDate?: Date;
  harvestDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const FieldSchema = new Schema<IField>(
  {
    name: {
      type: String,
      required: [true, 'Field name is required'],
      trim: true,
      minlength: [2, 'Field name must be at least 2 characters'],
      maxlength: [100, 'Field name cannot exceed 100 characters'],
    },
    farm: {
      type: Schema.Types.ObjectId,
      ref: 'Farm',
      required: [true, 'Farm reference is required'],
    },
    cropType: {
      type: String,
      required: [true, 'Crop type is required'],
      trim: true,
    },
    area: {
      type: Number,
      required: [true, 'Field area is required'],
      min: [0, 'Field area must be positive'],
    },
    soilType: {
      type: String,
      trim: true,
    },
    boundary: {
      type: {
        type: String,
        enum: ['Polygon'],
        default: 'Polygon',
      },
      coordinates: {
        type: [[[Number]]],
        required: [true, 'Field boundary coordinates are required'],
      },
    },
    status: {
      type: String,
      enum: ['active', 'fallow', 'preparation'],
      default: 'active',
    },
    plantingDate: {
      type: Date,
    },
    harvestDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Index for geospatial queries
FieldSchema.index({ boundary: '2dsphere' });

const Field: Model<IField> = mongoose.models.Field || mongoose.model<IField>('Field', FieldSchema);

export default Field;
