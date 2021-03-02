#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsStarterStack } from '../lib/aws-starter-stack';

const app = new cdk.App();
new AwsStarterStack(app, 'AwsStarterStack');
