import React from "react";

const themes = {
  wwdc: {
    name: "WWDC 2016",
    color: [
      "#292c36",
      "#dc3c3c",
      "#95c76f",
      "#d28e5d",
      "#8485ce",
      "#b73999",
      "#00aba5",
      "#a9acb6",
      "#434650",
      "#ff7c7c",
      "#d5ffaf",
      "#ffce9d",
      "#c4c5ff",
      "#f779d9",
      "#40ebe5",
      "#ffffff"
    ],
    foreground: "#ffffff",
    background: "#292c36"
  },
  flat: {
    name: "Flat",
    color: [
      "#34495E",
      "#E74C3C",
      "#2ECC71",
      "#F1C40F",
      "#3498DB",
      "#9B59B6",
      "#1ABC9C",
      "#ECF0F1",
      "#2C3E50",
      "#C0392B",
      "#27AE60",
      "#F39C12",
      "#3C7DD1",
      "#8E44AD",
      "#2980B9",
      "#BDC3C7"
    ],
    foreground: "#BDC3C7",
    background: "#1A242F"
  },
  "bright-lights": {
    name: "Bright Lights",
    color: [
      "#191919",
      "#ff355b",
      "#b7e876",
      "#ffc251",
      "#76d4ff",
      "#ba76e7",
      "#6cbfb5",
      "#c2c8d7",
      "#191919",
      "#ff355b",
      "#b7e876",
      "#ffc251",
      "#76d5ff",
      "#ba76e7",
      "#6cbfb5",
      "#c2c8d7"
    ],
    foreground: "#b3c9d7",
    background: "#191919"
  }
};

type PropsType = {
  theme: keyof typeof themes;
};

export default function ThemeView(props: PropsType) {
  const theme = themes[props.theme];
  const fgs = ["    m", "   1m", "  30m"];
  const fgsAttrs: Array<{}> = [
    {},
    { fontWeight: "bold" },
    { color: theme.color[0] }
  ];
  const bgs = [
    " 40m ",
    " 41m ",
    " 42m ",
    " 43m ",
    " 44m ",
    " 45m ",
    " 46m ",
    " 47m "
  ];

  var lines = [
    [
      <span key="p">{"     "}</span>,
      <span key="p1">{"     "}</span>,
      ...bgs.map((b, i) => <span key={i}>{b}</span>)
    ]
  ];
  for (let i = 0; i < fgs.length; i++) {
    let fg = fgs[i];
    let line = [
      <span key="p">{fg}</span>,
      <span key="p1" style={fgsAttrs[i]}>
        {" "}
        gYw{" "}
      </span>
    ];
    for (let j = 0; j < bgs.length; j++) {
      var bg = bgs[j];
      line.push(
        <span style={{ ...fgsAttrs[i], background: theme.color[j] }} key={bg}>
          {" "}
          gYw{" "}
        </span>
      );
    }
    line.push(<span key="last">{"     "}</span>);
    lines.push(line);
  }
  return (
    <div>
      <span className="dark-label">{theme.name}</span>
      <pre
        className="theme"
        style={{ color: theme.foreground, background: theme.background }}
      >
        {lines.map((l, i) => (
          <div key={i}>
            {l}
          </div>
        ))}
        <span>{"  .."}</span>
      </pre>
    </div>
  );
}
