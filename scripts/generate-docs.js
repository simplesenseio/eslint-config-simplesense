
import https from 'node:https';
import path from 'node:path';
import {
  fileURLToPath,
} from 'node:url';
import {
  rm,
  mkdir,
  writeFile,
  copyFile,
} from 'node:fs/promises';

import {
  ALL_RULES,
  parseRulename,
} from '../helpers/eslint-config.js';
import {
  CONFIG,
} from '../helpers/docs-config.js';

const DIRNAME = path.dirname(fileURLToPath(import.meta.url));
const DIR = {
  RULES: path.resolve(DIRNAME, '../docs/rules'),
  STATIC: path.resolve(DIRNAME, '../docs/static'),
  NODE_MODULES: path.resolve(DIRNAME, '../node_modules'),
};

function getDocumentOnline(url) {
  return new Promise((resolve, reject) => {
    const request = https.request(url, (res) => {
      let data = '';

      res.on('data', (buf) => (data += buf.toString()));
      res.on('error', reject);
      res.on('end', () => {
        const {
          statusCode,
        } = res;

        if (statusCode < 200 || statusCode > 299) return reject(new Error(`HTTP status code ${ statusCode } for ${ url }`));
        return resolve(data);
      });
    });

    request.on('error', reject);
    request.end();
  });
}

async function refreshDir() {
  try {
    await rm(DIR.RULES, {
      recursive: true,
    });
  } catch(err) {
    // ignore the error thrown when trying
    // to delete a non-existent directory
    if ('ENOENT' !== err.code) throw err;
  }
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  await mkdir(DIR.RULES, {
    recursive: true,
  });
  return Promise.all(Object.keys(CONFIG).map((key) => {
    const dirpath = path.resolve(DIR.RULES, `./${ 'default' === key ? 'eslint-recommended' : key }`);

    // eslint-disable-next-line security/detect-non-literal-fs-filename
    return mkdir(dirpath, {
      recursive: true,
    });
  }));
}

function writeDocument(dirpath, rulename, contents) {
  const filepath = path.resolve(DIR.RULES, `./${ dirpath }/${ rulename }.md`);

  // eslint-disable-next-line security/detect-non-literal-fs-filename
  return writeFile(filepath, contents);
}

async function writeFromGitHub({
  group,
  project,
  version,
  directory,
  namespace,
  githubDocsPath: docsPath = 'docs',
  githubRuleFilename: ruleFilename = '',
  rule,
  rulesPrefix = '',
}) {
  const rulePath = namespace.length ? `${ namespace }/${ rule }` : rule;
  const ruleFile = ruleFilename.length ? `/${ ruleFilename }` : '.md';

  rulesPrefix = rulesPrefix.length ? `${ rulesPrefix }/` : rulesPrefix;
  const url = `https://raw.githubusercontent.com/${ group }/${ project }/${ version }/${ docsPath }/${ rulesPrefix }rules/${ rulePath }${ ruleFile }`;

  const contents = await getDocumentOnline(url);

  return writeDocument(directory, rule, contents);
}

async function writeFromStatic({
  directory, rule,
}) {
  const filename = `./${ directory }/${ rule }.md`;

  return copyFile(path.resolve(DIR.STATIC, filename), path.resolve(DIR.RULES, filename));
}

async function writeFromModules({
  srcDir, dstDir, rule,
}) {
  const filename = `./${ rule }.md`;

  return copyFile(
    path.resolve(DIR.NODE_MODULES, `./${ srcDir }`, filename),
    path.resolve(DIR.RULES, `./${ dstDir }`, filename),
  );
}

await refreshDir();
for (const ruleName of Object.keys(ALL_RULES)) {
  const {
    group,
    name: rule,
    namespace,
  } = parseRulename(ruleName);
  const {
    ruleDenyList,
    sourceType,
    version,
    ...args
  } = (CONFIG[group] || CONFIG.default);

  if (!ruleDenyList.includes(rule)) {
    try {
      switch (sourceType) {
        case 'github':
          await writeFromGitHub({
            namespace,
            rule,
            version: 'sonarjs' === group ? 'master' : `v${ version }`,
            ...args,
          });
          break;
        case 'modules':
          await writeFromModules({
            rule,
            ...args,
          });
          break;
        case 'static':
          await writeFromStatic({
            rule,
            ...args,
          });
          break;
        default:
          throw new Error(`unknown sourceType: ${ sourceType }`);
      }
    } catch(err) {
      console.log({
        group,
        rule,
        namespace,
        config: {
          ...args,
          sourceType,
          version,
        },
      });
      throw err;
    }
  }
}

