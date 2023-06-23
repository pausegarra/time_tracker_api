import { Module } from '@nestjs/common';
import { CreateTopicController } from './infrastructure/controllers/create-topic.ctrl';
import { MysqlTopicRepository } from './infrastructure/repositories/mysql-topic.repository';
import { TopicModel } from './infrastructure/model/topic.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { GetTopicsController } from './infrastructure/controllers/get-topics.ctrl';
import { DeleteTopicController } from './infrastructure/controllers/delete-topic.ctrl';
import { TopicService } from './services/topic.service';
import { UpdateTopicController } from './infrastructure/controllers/update-topic.ctrl';
import { ActivateTopicController } from './infrastructure/controllers/activate-topic.ctrl';
import { MysqlTopicHistoryRepository } from './infrastructure/repositories/mysql-topichistory.repository';
import { TopicHistorySerivce } from './services/topic-history.service';

@Module({
  imports: [SequelizeModule.forFeature([TopicModel])],
  providers: [
    {
      provide: 'TopicRepository',
      useClass: MysqlTopicRepository,
    },
    {
      provide: 'TopicHistoryRepository',
      useClass: MysqlTopicHistoryRepository,
    },
    TopicService,
    TopicHistorySerivce,
  ],
  controllers: [
    CreateTopicController,
    GetTopicsController,
    DeleteTopicController,
    UpdateTopicController,
    ActivateTopicController,
  ],
})
export class TopicModule {}
