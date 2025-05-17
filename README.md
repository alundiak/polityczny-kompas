# Polityczny Kompas

Political compass to help my understand my political views:

- Left, axis `-x`
- Right, axis `+x`
- Libertarianism, axis `-y`
- Authoritarianism, axis `+y`

Green rectangle is "my political views" area. Other dots represent political people I somehow know.

![v2-poland](./images/v2-poland.png)

![v2-other-ua-ru](./images/v2-other-ua-ru.png)
![v2-other-ue](./images/v2-other-ue.png)
![v2-other-us-uk](./images/v2-other-us-uk.png)
![v2-other-all](./images/v2-other-all.png)

And [here](https://alundiak.github.io/polityczny-kompas/politica.html) is previous, my initial very basic version using basic HTML/SVG.

## Reason/Goal

Because of Presidential Elections in Poland 18-May-2025 I decided to create a political compass to review candidates views.

- https://en.wikipedia.org/wiki/2025_Polish_presidential_election

But as I always liked politics, and I like to dive deeper into political views on myself, I decided to extend this political compass with wider spectrum comparing all geo-political people I somehow know.

Most complicated is to define exact number in the scale from `[-5; +5]`, because not always people have definitive political views and spectrum is "tricky" sometimes.

![spectrum](./images/political_spectrum.jpeg)

## Other Political resources:

- https://en.wikipedia.org/wiki/Political_spectrum
- https://rationalwiki.org/wiki/Political_Compass
- I also use [ChatGPT](https://chatgpt.com/) to research and compare people's political view. But it is sometimes very wrong, so need to be always cautious and double check facts personally.

## Tech stack

- React
- ReCharts (`<ScatterChart>`, `<CartesianGrid>`, `<ReferenceLine>`, `<ReferenceArea>` etc.)
  - https://recharts.org/en-US/examples/SimpleScatterChart
  - https://codesandbox.io/p/sandbox/recharts-referencearea-with-a-custom-shape-iwp2j
- [TailwindCSS](https://tailwindcss.com)

## Kinda inspired by

- https://www.politicalcompass.org/
- https://github.com/greygatch/political-compass/
- https://github.com/AUTOMATIC1111/llm-political-compass
- https://github.com/experience-experiments/react-easy-chart DEPRECATED

## Political Quizzes

- https://cdw.edu.pl/kompas/kompas-pogladow/ ([mój wynik](https://cdw.edu.pl/kompas/kompas-pogladow/?res=24214452245123405444))
- https://latarnikwyborczy.pl/ankieta ([mój wynik](https://latarnikwyborczy.pl/s/32f02ef8db))

## Got somethings new in technical experience

- ReCharts experience.
- Touch to Light/Dark theme support CSS coding
- `SVG` restrictions with emojis and fonts. Corporate or Windows laptops may NOT render flag-emojis, as result need to re-think a fallback.

## Bonus. Polityczny kompas języków programowania

![v2-other-lang](./images/v2-other-lang.png)
