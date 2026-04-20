import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  getAllUsers(@Query() query: any) {
    return this.userService.getAllUsers(query);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteById(id);
  }

  @Delete('name/:username')
  deleteByName(@Param('username') username: string) {
    return this.userService.deleteByName(username);
  }

  @Get(':id/search')
  searchJobs(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: { id?: string; name?: string; category?: string },
  ) {
    return this.userService.searchJobs(id, query);
  }

  @Post(':id/apply')
  @UsePipes(new ValidationPipe())
  applyForJob(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    application: {
      username: string;
      email: string;
      DoB: string;
      password: string;
      jobid: string;
      jobname: string;
      jobcategory: string;
    },
  ) {
    return this.userService.applyForJob(id, application);
  }
}
