const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { By } = require("selenium-webdriver");

const test = async () => {
  const driver = await new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();

  await driver.get("http://localhost:3000");

  //Test #1: If not login in cannot write blog
  console.log("Test 1 - Write blog only if logged in");
  const signIn = await driver
    .findElement(By.xpath('//*[@id="root"]/div[1]/div[2]/ul/li[5]'))
    .isDisplayed();
  if (signIn) {
    await driver
      .findElement(By.xpath('//*[@id="root"]/div[1]/div[2]/ul/li[5]'))
      .click();
    await driver.sleep(2000);
  }
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[1]/div[2]/ul/li[4]/a'))
    .click();
  await driver.sleep(5000);
  const heading = await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div/span'))
    .getText();
  console.log(heading);
  if (heading == "Register") {
    console.log("Test successful");
  } else {
    console.log("Test unsuccessful");
  }

  //Test #2: Check if sign in is successful
  console.log("\nTest 2 - Login in");
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[1]/div[2]/ul/li[1]/a'))
    .click();
  await driver.sleep(5000);
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[1]/div[3]/ul/li[1]/a'))
    .click();
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div/form/input[1]'))
    .sendKeys("hannah");
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div/form/input[2]'))
    .sendKeys("hello");
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div/form/button'))
    .click();
  await driver.sleep(5000);
  const logoutOption = await driver
    .findElement(By.xpath('//*[@id="root"]/div[1]/div[2]/ul/li[5]'))
    .isDisplayed();
  if (logoutOption) {
    console.log("Test successful");
  } else {
    console.log("Test unsuccessful");
  }

  //Test #3: Publish a blog
  console.log("\nTest 3 - Publish a blog");
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[1]/div[2]/ul/li[4]/a'))
    .click();
  await driver.sleep(5000);
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/form/div[1]/input[2]'))
    .sendKeys("Random Title");
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/form/div[2]/textarea'))
    .sendKeys("Random Stuff");
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/form/button'))
    .click();
  await driver.sleep(5000);
  const editOpt = await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div[1]/div[1]/h1/div/i[1]'))
    .isDisplayed();
  if (editOpt) {
    console.log("Test successful");
  } else {
    console.log("Test unsuccessful");
  }

  //Test #4: Edit Blog
  console.log("\nTest 4 - Edit a blog");
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div[1]/div[1]/h1/div/i[1]'))
    .click();
  await driver.sleep(5000);
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div[1]/div[1]/textarea'))
    .clear();
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div[1]/div[1]/textarea'))
    .sendKeys("Updated Blog");
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div[1]/div[1]/button'))
    .click();
  driver.sleep(7000);
  const edit = await driver.findElement(By.className("singleDesc")).getText();
  if (edit == "Updated Blog") {
    console.log("Test successful");
  } else {
    console.log("Test unsuccessful");
  }

  //Test #5: Add Comment
  console.log("\nTest 5 - Add comment");
  await driver.sleep(5000);
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div[1]/div[2]/form/input'))
    .sendKeys("I wrote this blog");
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div[1]/div[2]/form/button'))
    .click();
  await driver.sleep(2000);
  const comment = await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div[1]/div[2]/form/div/div'))
    .isDisplayed();
  if (comment) {
    console.log("Test successful");
  } else {
    console.log("Test unsuccessful");
  }

  //Test #6: Delete Blog
  console.log("\nTest 6 - Delete blog");
  await driver.sleep(5000);
  await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div[1]/div[1]/h1/div/i[2]'))
    .click();
  await driver.sleep(5000);
  const title = await driver
    .findElement(By.xpath('//*[@id="root"]/div[2]/div/span[1]'))
    .getText();
  if (title == "blogging") {
    console.log("Test successful");
  } else {
    console.log("Test unsuccessful");
  }

  driver.close();
};

test();
