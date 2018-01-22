const normalize = (data, parent = "", descendants) => {
  descendants = [...descendants, parent];
  let ancestors = descendants.map(d => d.substring(0, d.length - 1));
  var entities = {};

  if (Array.isArray(data) && data[0]) {
    entities[parent] = {};

    for (let i = 0; i < data.length; i++) {
      if (descendants.length) {
        for (let j = 0; j < descendants.length; j++) {
          if (data[i][descendants[j]]) {
            let dataRef = [];
            for (let k = 0; k < data[i][descendants[j]].length; k++) {
              for (let l = 0; l < descendants.length; l++) {
                if (data[i][descendants[j]][k][descendants[l]]) {
                  let dataRef2 = [];
                  for (
                    let m = 0;
                    m < data[i][descendants[j]][k][descendants[l]].length;
                    m++
                  ) {
                    entities[descendants[l]] = {
                      ...entities[descendants[l]],
                      [data[i][descendants[j]][k][descendants[l]][m].id]:
                        data[i][descendants[j]][k][descendants[l]][m]
                    };
                    dataRef2 = [
                      ...dataRef2,
                      data[i][descendants[j]][k][descendants[l]][m].id
                    ];
                  }
                  data[i][descendants[j]][k][descendants[l]] = dataRef2;
                }
              }
              entities[descendants[j]] = {
                ...entities[descendants[j]],
                [data[i][descendants[j]][k].id]: data[i][descendants[j]][k]
              };

              for (let n = 0; n < ancestors.length; n++) {
                if (
                  entities[descendants[j]][data[i][descendants[j]][k].id][
                    ancestors[n]
                  ]
                ) {
                  entities[ancestors[n] + "s"] = {
                    ...entities[ancestors[n] + "s"],
                    [entities[descendants[j]][data[i][descendants[j]][k].id][
                      ancestors[n]
                    ].id]:
                      entities[descendants[j]][data[i][descendants[j]][k].id][
                        ancestors[n]
                      ]
                  };

                  entities[descendants[j]][data[i][descendants[j]][k].id][
                    ancestors[n]
                  ] =
                    entities[descendants[j]][data[i][descendants[j]][k].id][
                      ancestors[n]
                    ].id;
                }
              }
              dataRef = [...dataRef, data[i][descendants[j]][k].id];
            }
            data[i][descendants[j]] = dataRef;
          }
        }
      }
      entities[parent] = { ...entities[parent], [data[i].id]: data[i] };

      for (let o = 0; o < ancestors.length; o++) {
        if (entities[parent][data[i].id][ancestors[o]]) {
          entities[ancestors[o] + "s"] = {
            ...entities[ancestors[o] + "s"],
            [entities[parent][data[i].id][ancestors[o]].id]:
              entities[parent][data[i].id][ancestors[o]]
          };

          entities[parent][data[i].id][ancestors[o]] =
            entities[parent][data[i].id][ancestors[o]].id;
        }
      }
    }
  }

  return entities;
};

export default normalize;
