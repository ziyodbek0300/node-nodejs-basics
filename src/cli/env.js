const parseEnv = (prefix = 'RSS_') => {
    const envs = []
    for (const key in process.env) {
        if (key.startsWith(prefix)) {
            envs.push(`${key}=${process.env[key]}`)
        }
    }
    console.log(envs.join('; '))
};

parseEnv();