---
permalink: /contribute/
title: Contribute
layout: page
# This is a sample page with some markdown that uses the page layout
# it is not published (see _config.yml / exclude) currently
---

This is a list of common website content changes and how to make them

## Adding a new picture to the Gallery

0. Ensure that the images are not too large. Resize them to around 1200px
wide, so that the image size is less than 500kb.

2. Go to <https://github.com/BlrChessClub/BCC-website/upload/main/images/gallery>

3. Drag/drop the image files

4. Add some text to explain which images

5. Select create a new branch

5. Click on "Propose changes"

## Adding a new testimonial

1. Create a new file in the `_testimonials` directory by clicking [here](https://github.com/BlrChessClub/BCC-website/new/main/_testimonials)

2. You can use the following template. 
```markdown
---
image: replacethiswithname.jpeg
name: Persons Name
subtitle: Chess Enthusiast
---
Enter the testimonial text here
```
3. Upload the image file to [images/testimonial directory by clicking here](https://github.com/BlrChessClub/BCC-website/upload/main/images/testimonial)
4. Make sure that the image file is less than 250px wide.

If you'd like to make technical changes to the website,
such as with styles, javascript, or other tooling, please
see [HACKING.md](HACKING.md).

## Adding a new event

Create a new file in events/2024 called MM-DD-type.md, where
```
MM-two digit month of the event
DD-two digit day of the event
```

Use the following as a template:
```md
---
location: uru-brewpark # this must match a file in _data/locations/
title: "Event Title"
image: filename_inside_images.jpg
# Variations for the event, see _data/variations.yml for a complete list, you can add more there.
# If this is something very different, like a Quiz - do not set this at all
variations:
- standard-knockout
- hand&brain
- bughouse
layout: event
payment:
  price: 600
  razorpay: pl_OflT3lHyXoYGdd # Razorpay Payment Link.
# Event timestamps for start and end time as YYYY-MM-DDTHH:MM format.
startsAt: 2024-08-11T16:00 
endsAt: 2024-08-11T19:00
# You can use whatever markdown you want here as the event URL
# but suggestion is to use /event-type/YYYY-MM-DD/
permalink: /chess-connect/2024-08-11/
---
## Event Details

Join us for a one-of-a-kind chess event at Uru Brewery,
Whether you're a grandmaster or a beginner, this is your chance to enjoy the game in a relaxed and friendly environment.
Sip on some of the finest beverages, meet fellow chess enthusiasts, and engage in thrilling matches.

## What's Included

* 3 Hours of multiple Fun-filled Chess Variants
- `Ticket includes Food/Beverage coupon worth ₹400`
```

### Formatting Options:

- Standard markdown is supported, please see https://www.markdownguide.org/cheat-sheet/ for getting started.
- Every Header-2 Tag is automatically split into sections, so `## Section` creates a new section.
- Every backtick enclosed text is automatically highlighted, including inside headings.