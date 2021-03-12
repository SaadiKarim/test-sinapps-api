import { plainToClass } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

enum Environment {
  Development = "development",
  Production = "production",
  Staging = "staging",
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;
  @IsNumber()
  PORT: number;
  @IsString()
  JWT_SECRET: string;
  @IsString()
  JWT_EXPIRES; string;
  @IsString()
  PARKING_SERVICE_HOST: string;
  @IsNumber()
  PARKING_SERVICE_PORT: number;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(
    EnvironmentVariables,
    config,
    { enableImplicitConversion: true },
  );
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}