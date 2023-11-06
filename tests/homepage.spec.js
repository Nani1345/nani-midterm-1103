const { test, expect } = require('@playwright/test');
// const websiteURL = 'http://localhost:3000';

// test('check that "express works" text is present', async ({ page }) => {
//   await page.goto('/');
  
//   // Using the expect method with a page locator
//   // This will check if the text "express works" is present anywhere on the page
//   // Using a locator to get the text content of the h1 element
//   const heading = page.locator('h1');
//   await expect(heading).toHaveText('express works');

// });

// test('check that UTF-8 meta tag is present', async ({ page }) => {
//   //Arrange: Go to the site homepage
//   await page.goto('/');

//   //Act: Get the content attribute of the meta charset tag
//   const metaCharset = await page.$eval('meta[charset]', (meta) => meta.getAttribute('charset'));

//   //Assert: Check if the charset is set to UTF-8
//   await expect(metaCharset).toBe('utf-8');
// });

// test('check the first html', async ({ page }) => {
//   await page.goto('https://nani1345.github.io/nani-midterm-1103/'); 

// });



test('Check if the page title is "Portfolio', async ({ page }) => {
    await page.goto('https://nani1345.github.io/nani-midterm-1103/'); 
    await expect(page).toHaveTitle('Portfolio');
  });

test('Check first html meta name=description', async ({ page }) => {
    await page.goto('https://nani1345.github.io/nani-midterm-1103/'); 
    const description = await page.$eval('meta[name="description"]', (element) => element.getAttribute('content'));
    expect(description).toBe('This is a portfolio part 1'); 
  });


test('Check if "Hi There, I\'m Na Xu" is an h1 element', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/'); 
  const h1Text = await page.locator('h1').textContent();
  expect(h1Text).toBe("Hi There, I'm Na Xu");
});

test('Check if the page contains a valid meta description', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/'); 
  const metaDescription = await page.$eval('meta[name="description"]', (meta) => meta.getAttribute('content'));
  expect(metaDescription).not.toBe(null);
});

test('Check if the menu contains "Projects"', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/'); 

  const menuItems = await page.$$eval('.menu-item', (elements) =>
    elements.map((element) => element.textContent)
  );
  const containsProjects = menuItems.includes('Projects');
  expect(containsProjects).toBe(true);
});

test('Check main title and subtitle', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/'); 
  const mainTitle = await page.textContent('h1');
  const subTitle = await page.textContent('.sub-text');
  expect(mainTitle).toBe("Hi There, I'm Na Xu");
  expect(subTitle).toBe('Looking for a software development engineer job.');
});

test('Check project titles', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/'); 
  const project1Title = await page.textContent('.project1-text');
  const project2Title = await page.textContent('.project2-text');
  expect(project1Title).toBe('Using Figma to design a website');
  expect(project2Title).toBe('Hosting your website on Github');
});

test('Check project images', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/'); 
  const project1Image = await page.locator('.project1 img').count();
  const project2Image = await page.locator('.project2 img').count();
  expect(project1Image).toBe(1); 
  expect(project2Image).toBe(1); 
});



test('Check meta description', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/'); 
  const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
  expect(metaDescription).toBe('This is a portfolio part 1');
});

test('Check pill-link text and URL', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/'); 
  const pillLinkText = await page.textContent('.pill-link');
  const pillLinkURL = await page.getAttribute('.pill-link', 'href');
  expect(pillLinkText).toBe('Review My Projects');
  expect(pillLinkURL).toBe('index2.html#section-project');
});

test('Check project links URLs', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/'); 
  const project1LinkURL = await page.getAttribute('.project1 a', 'href');
  const project2LinkURL = await page.getAttribute('.project2 a', 'href');
  expect(project1LinkURL).toBe('index2.html#section-project');
  expect(project2LinkURL).toBe('index2.html#section-project');
});



test('Check page title', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/index2.html'); 
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Portfolio');
});



test('Check if skill icons are loaded', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/index2.html'); 
  const skillIcons = await page.locator('.skill-icon img').count();
  expect(skillIcons).toBe(8); 
});

test('Check project section titles and descriptions', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/index2.html'); 
  const project1Title = await page.textContent('.project1-section h3');
  const project1Description = await page.textContent('.project1-sub-text1');
  expect(project1Title).toBe('01/ Using Figma to design a website');
  expect(project1Description).toBe('Using Figma to create a convenient shopping platform that helps users easily browse and purchase a wide range of products.');
});

test('Check if contact image is loaded', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/index2.html'); 
  const contactImage = await page.locator('.contact-image img').count();
  expect(contactImage).toBe(1); 
});

test('Check non-script stylesheet loading', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/index2.html');
  const stylesheetRel = await page.locator('link[rel="stylesheet"][href="main2.css"]').count();
  expect(stylesheetRel).toBe(1); 
});

test('Check meta name=description', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/index2.html'); 
  const description = await page.$eval('meta[name="description"]', (element) => element.getAttribute('content'));
  expect(description).toBe('This is a portfolio part 2'); 
});



test('Check project section 2 titles and descriptions', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/index2.html'); 
  const project1Title = await page.textContent('.project2-section h3');
  expect(project1Title).toBe('02/ Hosting your website on Github');
  
});

test('Check if "About me" is in an h2 element', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/index2.html'); 
  const aboutMeElement = await page.locator('.feached h2'); 
  expect(await aboutMeElement).not.toBeNull(); 
});

test('Check if the page of second html title is "Portfolio', async ({ page }) => {
  await page.goto('https://nani1345.github.io/nani-midterm-1103/index2.html'); 
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Portfolio');
});