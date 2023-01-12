---
title: A Tutorial
overview: This is the overview section. Add an overview in the frontmatter of an article to display it here. By keeping the overview in frontmatter, we should be able to access it later for excerpts in a search.
breadcrumbs:
  - title: Home
    url: /
  - title: Tutorial
    url: /docs/tutorial/
---

{% tableofcontents %}

## Callouts

Use callouts to highlight specific information and convey quick meaning with bold words, colors, and icons.

{% callout 'callout | note', 'Note' %}

Bolivian rainbow pepper.

{% endcallout %}

{% callout 'callout | important', 'Important' %}

Bolivian rainbow pepper.

- orange
- arugula
- salad

{% endcallout %}

{% callout 'callout | warning', 'Warning' %}

Bolivian rainbow pepper.

{% endcallout %}

{% callout 'callout | new', 'New' %}

Bolivian rainbow pepper.

1. orange
2. arugula
3. salad

{% endcallout %}

## Code blocks

Provide code blocks for easy understanding and copy paste. May also be useful for configs where we want the text formatting to be specific.

```js
const currentPage = document.querySelector(`details a[aria-current="page"]`);

if (currentPage) {
  currentPage.closest("details").setAttribute("open", "");
}
```

```css
code,
pre {
  padding: 0.125em 0.4em;
  font-family: var(--font-mono);
  background: var(--color-dark);
  border-radius: var(--border-radius);
  color: var(--color-light);
  font-size: var(--size-step-0);
}
```

```java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}

```

```python
thislist = ["apple", "banana", "cherry"]
print(thislist)
```

```sql
SELECT * FROM Customers
ORDER BY Country DESC;
```

## Details

Use details callouts to hide a long explanation that may be useful but tangential.

{% details "callout | details", "View more details" %}

Bolivian rainbow pepper Vegan Ipsum Me lemon tahini dressing salty second course picnic salad Thai basil curry chickpea crust pizza tahini drizzle pineapple salsa eating together fiery fruit samosa garlic sriracha noodles hearts of palm miso dressing lingonberry ginger tofu peaches grains broccoli.

- And
- here
- is
- a
- list

{% enddetails %}

## Images

Images must contain alternative text and a caption. Images are automatically processed into various sizes and modern file formats, such as avif and webp. This ensures the right size and a lightweight version of the image is rendered with on the client.

{% image "./src/docs/tutorial/a-tutorial/vegetable-infograph.jpg", "An infograph explaining how to avoid food waste", "This is the caption of this infograph." %}

## Links

[This link](/docs/explanation/an-explanation/) is internal and [this link](https://duckduckgo.com/) is external. The external link should open in a new tab.

## Marked text

Highlight specific text with `==mark==`. ==This sentence has been highlighted==.

## Paragraphs and lists

Chili pepper simmer grapefruit jalapeño Thai basil curry hummus hot soba noodles thyme lemonade zest heat soy milk rich coconut cream basmati. Pine nuts red pepper chia seeds cilantro lime vinaigrette red grapes apricot cayenne dill green tea lime Thai super chili sriracha pecans blueberries coriander banh mi salad rolls hazelnut shiitake mediterranean vegetables.

- chili
  - chilis
  - peppers
- pepper
- simmer
- grapefruit
- jalapeño

1. chili
   1. chilis
   2. peppers
2. pepper
3. simmer
4. grapefruit
5. jalapeño

## Tables

Tables are useful for clearly conveying data. Highlight a row by hovering on it.

| Item    | Price    | # In stock |
| ------- | -------- | ---------- |
| Apples  | 1.99     | 7          |
| Bananas | **1.89** | 22         |
| Oranges | 1.99     | 52         |
| Grapes  | 1.99     | 34         |
| Mangos  | 2.89     | 23         |

## See also

- [Tutorial](/docs/tutorial/)
- [A Second Tutorial](/docs/a-second-tutorial/)
