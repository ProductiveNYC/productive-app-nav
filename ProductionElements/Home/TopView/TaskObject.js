/**
 * Copyright iProductive 2018
 * App 2.0
 * 
 * Language: React Native
 * 
 * @author Ehud Adler
 * @class Tabbar
 * 
 */
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';


export default class TaskObject 
{
    constructor(name, iconURL, category, creditCost) 
    {
        this.name    = name
        this.iconURL = iconURL
        this.category   = category
        this.creditCost = creditCost
    }
  }