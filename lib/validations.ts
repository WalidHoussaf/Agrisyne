import { z } from 'zod';

// User validation schemas
export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name cannot exceed 50 characters'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, 
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

// Farm validation schemas
export const createFarmSchema = z.object({
  name: z.string().min(2).max(100),
  location: z.object({
    address: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1),
    country: z.string().min(1),
    coordinates: z.object({
      latitude: z.number().min(-90).max(90),
      longitude: z.number().min(-180).max(180),
    }),
  }),
  totalArea: z.number().positive(),
  description: z.string().max(500).optional(),
});

// Field validation schemas
export const createFieldSchema = z.object({
  name: z.string().min(2).max(100),
  farm: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid farm ID'),
  cropType: z.string().min(1),
  area: z.number().positive(),
  soilType: z.string().optional(),
  boundary: z.object({
    type: z.literal('Polygon'),
    coordinates: z.array(z.array(z.array(z.number()))),
  }),
  status: z.enum(['active', 'fallow', 'preparation']).default('active'),
  plantingDate: z.string().datetime().optional(),
  harvestDate: z.string().datetime().optional(),
});

// Sensor validation schemas
export const createSensorSchema = z.object({
  sensorId: z.string().min(1),
  field: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid field ID'),
  type: z.enum(['soil-moisture', 'temperature', 'humidity', 'ph', 'light', 'rainfall']),
  name: z.string().min(1),
  location: z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
  }),
  status: z.enum(['active', 'inactive', 'maintenance', 'error']).default('active'),
  manufacturer: z.string().optional(),
  modelName: z.string().optional(),
  installDate: z.string().datetime().optional(),
  batteryLevel: z.number().min(0).max(100).optional(),
});

// Sensor Reading validation schemas
export const createSensorReadingSchema = z.object({
  sensor: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid sensor ID'),
  field: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid field ID'),
  value: z.number(),
  unit: z.string().min(1),
  quality: z.enum(['good', 'fair', 'poor']).default('good'),
  metadata: z.record(z.any()).optional(),
});
