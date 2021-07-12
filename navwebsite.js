const { context } = await launch();
const page = await context.newPage();

//...................VPERFUMES.........................//


await page.goto('https://www.vperfumes.com');
await page.click("text=SHOP BY CATEGORY");
await page.click("text=Hair Care");
await page.click('[alt="Kleaf Optimising Shampoo 275 ml"]');


//  Add to cart from PDP //

await page.click("text=Add to Cart");

//  Check the action of wishlist //

await page.click(".mr-md-3");

//  Move to cart from wishlist  //

await page.click(".mr-md-3");
await page.click("text=Wishlist");
await page.click("text=Move to Cart");
await page.click("text=Cart");

//  Share button of PDP page  //

const [page2] = await Promise.all([
  page.waitForEvent("popup"),
  page.click('[aria-label="Share on WhatsApp"]'),
]);
await page2.waitForLoadState("domcontentloaded");
await page2.bringToFront();await page.click('[aria-label="Share on WhatsApp"]');
const [page3] = await Promise.all([
  page.waitForEvent("popup"),
  page.click('[aria-label="Share on Facebook"]'),
]);
await page3.waitForLoadState("domcontentloaded");
await page3.bringToFront();await page.click('[aria-label="Share on Facebook"]');
const [page4] = await Promise.all([
  page.waitForEvent("popup"),
  page.click('[aria-label="Share on Twitter"]'),
]);
await page4.waitForLoadState("domcontentloaded");
await page4.bringToFront();await page.click('[aria-label="Share on Twitter"]');

//   Verify Guest Login  //

await page.click("text=Add to Cart");
await page.click("text=Proceed to Checkout");
await page.click('[type="email"]');
await page.fill('[type="email"]', "divyaarora@notationtech.com");
await page.click('[placeholder="55xxxxxxx"]');
await page.fill('[placeholder="55xxxxxxx"]', "222222222");
await page.click("text=PROCEED");


//.........................BySymphony......................//


await page.goto('https://www.bysymphony.com/home');
await page.click("text=NEW ARRIVALS");
await page.click('[alt="Esma Asymmetric Cape Sleeve Dress"]');
await page.click("text=ADD TO BAG");


//  Add to cart from PDP //

await page.click("text=ADD TO BAG");

//  Check the action of wishlist //

await page.click('[src="https://prod-admin-images.s3.ap-south-1.amazonaws.com/BL36Sm9mN_9Fk1TuLw9R/logo/image-d-3bKb-Ai.png"]');
await page.click('[src="https://resources.commerceup.io/?key=https://prod-admin-images.s3.ap-south-1.amazonaws.com/BL36Sm9mN_9Fk1TuLw9R/other/image-hdHhl6Vlk.png&width=80&resourceKey=BL36Sm9mN_9Fk1TuLw9R"]');

//  Move to cart from wishlist  //

await page.click('[src="https://prod-admin-images.s3.ap-south-1.amazonaws.com/BL36Sm9mN_9Fk1TuLw9R/logo/image-d-3bKb-Ai.png"]');
await page.click('[src="https://resources.commerceup.io/?key=https://prod-admin-images.s3.ap-south-1.amazonaws.com/BL36Sm9mN_9Fk1TuLw9R/other/image-hdHhl6Vlk.png&width=80&resourceKey=BL36Sm9mN_9Fk1TuLw9R"]');
await page.click("div");
await page.click("text=ADD TO BAG");

//  Share button of PDP page  //

const [page2] = await Promise.all([
  page.waitForEvent("popup"),
  page.click('[aria-label="Share on WhatsApp"]'),
]);
await page2.waitForLoadState("domcontentloaded");
await page2.bringToFront();await page.click('[aria-label="Share on WhatsApp"]');
const [page3] = await Promise.all([
  page.waitForEvent("popup"),
  page.click('[aria-label="Share on Facebook"]'),
]);
await page3.waitForLoadState("domcontentloaded");
await page3.bringToFront();await page.click('[aria-label="Share on Facebook"]');
const [page4] = await Promise.all([
  page.waitForEvent("popup"),
  page.click('[aria-label="Share on Twitter"]'),
]);
await page4.waitForLoadState("domcontentloaded");
await page4.bringToFront();await page.click('[aria-label="Share on Twitter"]');

//   Verify Guest Login  //

await page.click("text=Proceed to Checkout");
await page.click('[type="email"]');
await page.fill('[type="email"]', "divyaarora@notationtech.com");
await page.click('[placeholder="55xxxxxxx"]');
await page.fill('[placeholder="55xxxxxxx"]', "222222222");
await page.click("text=PROCEED");

//.........................BeyondFresh......................//

await page.goto('https://www.beyondfresh.ae/home');
await page.click("div:nth-of-type(2) a");
await page.click('[alt="Apple Red USA"]');
await page.click("text=Add to Cart");

//  Add to cart from PDP //

await page.click("text=Add to Cart");

//  Check the action of wishlist //

await page.click(".mt-lg-0 span");
await page.click("text=My Wishlist 1");

//  Move to cart from wishlist  //

await page.click(".mt-lg-0 span");
await page.click("text=My Wishlist");
await page.click("text=Move to Cart");
await page.click("text=My Cart");

//  Share button of PDP page  //

const [page2] = await Promise.all([
  page.waitForEvent("popup"),
  page.click('[aria-label="Share on WhatsApp"]'),
]);
await page2.waitForLoadState("domcontentloaded");
await page2.bringToFront();await page.click('[aria-label="Share on WhatsApp"]');
const [page3] = await Promise.all([
  page.waitForEvent("popup"),
  page.click('[aria-label="Share on Facebook"]'),
]);
await page3.waitForLoadState("domcontentloaded");
await page3.bringToFront();await page.click('[aria-label="Share on Facebook"]');
const [page4] = await Promise.all([
  page.waitForEvent("popup"),
  page.click('[aria-label="Share on Twitter"]'),
]);
await page4.waitForLoadState("domcontentloaded");
await page4.bringToFront();await page.click('[aria-label="Share on Twitter"]');

//   Verify Guest Login  //

await page.click("text=Proceed to Checkout");
await page.click('[type="email"]');
await page.fill('[type="email"]', "divyaarora@notationtech.com");
await page.click('[placeholder="55xxxxxxx"]');
await page.fill('[placeholder="55xxxxxxx"]', "222222222");
await page.click("text=PROCEED");
