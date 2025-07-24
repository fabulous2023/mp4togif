#!/usr/bin/env node

/**
 * Webhook自动部署脚本
 * 可以用于自建CI/CD或第三方服务集成
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 配置
const config = {
  branch: process.env.DEPLOY_BRANCH || 'main',
  buildCommand: 'npm run build',
  deployCommand: 'npm run deploy',
  logFile: path.join(__dirname, '../deploy.log'),
};

// 日志函数
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  console.log(logMessage.trim());
  fs.appendFileSync(config.logFile, logMessage);
}

// 执行命令
function runCommand(command, description) {
  log(`开始: ${description}`);
  try {
    const output = execSync(command, { 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    log(`成功: ${description}`);
    log(`输出: ${output}`);
    return true;
  } catch (error) {
    log(`失败: ${description}`);
    log(`错误: ${error.message}`);
    return false;
  }
}

// 主部署流程
async function deploy() {
  log('=== 开始自动部署 ===');
  
  try {
    // 1. 拉取最新代码
    if (!runCommand(`git pull origin ${config.branch}`, '拉取最新代码')) {
      throw new Error('代码拉取失败');
    }

    // 2. 安装依赖
    if (!runCommand('npm ci', '安装依赖')) {
      throw new Error('依赖安装失败');
    }

    // 3. 类型检查
    if (!runCommand('npm run type-check', 'TypeScript类型检查')) {
      log('警告: 类型检查失败，但继续部署');
    }

    // 4. 构建项目
    if (!runCommand(config.buildCommand, '构建项目')) {
      throw new Error('项目构建失败');
    }

    // 5. 部署到Cloudflare
    if (!runCommand(config.deployCommand, '部署到Cloudflare')) {
      throw new Error('部署失败');
    }

    log('=== 部署成功完成 ===');
    
    // 发送成功通知 (可选)
    if (process.env.WEBHOOK_SUCCESS_URL) {
      await sendNotification(process.env.WEBHOOK_SUCCESS_URL, {
        status: 'success',
        message: '部署成功完成',
        timestamp: new Date().toISOString()
      });
    }

  } catch (error) {
    log(`=== 部署失败: ${error.message} ===`);
    
    // 发送失败通知 (可选)
    if (process.env.WEBHOOK_ERROR_URL) {
      await sendNotification(process.env.WEBHOOK_ERROR_URL, {
        status: 'error',
        message: error.message,
        timestamp: new Date().toISOString()
      });
    }
    
    process.exit(1);
  }
}

// 发送通知
async function sendNotification(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      log('通知发送成功');
    } else {
      log(`通知发送失败: ${response.status}`);
    }
  } catch (error) {
    log(`通知发送错误: ${error.message}`);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  deploy();
}

module.exports = { deploy };
