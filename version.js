const exec = require('child_process').execSync;
const process = require('process');
const fs = require('fs');
const path = require('path');

function getCommand() {
  const [, , ...argv] = process.argv;
  return argv.reduce((prev, v) => {
    const kv = v.split('=');
    prev[kv[0]] = kv[1];
    return prev;
  }, {});
}

function getDateStr(date) {
  const prefixZero = v => (v < 10 ? '0' + v : v);
  return (
    date.getFullYear() +
    '-' +
    prefixZero(date.getMonth() + 1) +
    '-' +
    prefixZero(date.getDate()) +
    ' ' +
    prefixZero(date.getHours()) +
    ':' +
    prefixZero(date.getMinutes()) +
    ':' +
    prefixZero(date.getSeconds())
  );
}

const cmd = getCommand();
const versionPath = path.resolve(cmd.path || './dist/version');
const commitId = exec('git log -1 --format="COMMIT ID: %HDATE: %cd" --date=format:"%Y-%m-%d %H:%M:%S"\n')
  .toString()
  .replace('DATE:', '\nCOMMIT TIME:');
const branch = exec('git name-rev --name-only HEAD');

const dir = path.dirname(versionPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const buildTime = 'BUILD TIME: ' + getDateStr(new Date()) + '\n';
fs.writeFileSync(versionPath, `BRANCH: ${branch}${commitId}${buildTime}`);
