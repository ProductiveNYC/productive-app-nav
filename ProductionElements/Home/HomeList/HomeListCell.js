import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

import TaskObject from '../TopView/TaskObject'


export default class HomeListCell
{
    constructor(task, comments, createdDate, status, completedDate, assignedToService)
    {
        this.task         = task;
        this.comments     = comments;
        this.createdDate  = createdDate;
        this.status       = status
        this.completedDate     = completedDate
        this.assignedToService = assignedToService
    }
  }
