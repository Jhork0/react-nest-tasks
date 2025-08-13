import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const uri = configService.get<string>('MONGODB_URI');

        if (!uri) {
          throw new Error('❌ MONGODB_URI no está definida en el archivo .env');
        }

        return { uri };
      },
      inject: [ConfigService],
    }),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
