const parseArgs = () => {
    const userArgs = []
    const args = process.argv.slice(2)
    for (let i = 0; i < args.length; i++) {
        userArgs.push(`${args[i].slice(2)} is ${args[i+1]}`)
        i++
    }
    console.log(userArgs.join(', '))
};

parseArgs();