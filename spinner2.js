//Re-factored from spinner.js
const spinBar = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];
spinBar.forEach((bar, index) => {
  setTimeout(() => {
    process.stdout.write(bar)
  }, 500 * index)
})
