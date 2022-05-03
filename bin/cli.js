#!/usr/bin/env node

const { MigrationService } = require('../dist/core/database/services/MigrationService');

const migrationService = new MigrationService();

migrationService.create('CreateUsers');