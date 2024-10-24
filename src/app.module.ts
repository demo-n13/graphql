import { appConfig } from '@config';
import { CarModule } from '@modules';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PrismaModule } from './prisma';
import { CarTypeModule } from './modules/car-type/car-type.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // -> for code first approach
      typePaths: ["./src/modules/**/*.gql"],
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      installSubscriptionHandlers: true,
    }),
    PrismaModule,
    CarModule,
    CarTypeModule,
  ],
})
export class AppModule {}
