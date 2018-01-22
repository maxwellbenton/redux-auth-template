import React from "react";

class NormalizedDataInfo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr 1fr 2fr",
            gridTemplateColumns: "auto",
            textAlign: "center"
          }}
        >
          <div style={{ margin: "40px", fontSize: "250%", lineHeight: "1em" }}>
            What is Normalized Data?
          </div>
          <div style={{ padding: "0 100px", textAlign: "justify" }}>
            Database normalization, or simply normalization, is the process of
            restructuring a relational database in accordance with a series of
            so-called normal forms in order to reduce data redundancy and
            improve data integrity.{" "}
            <a href="https://en.wikipedia.org/wiki/Database_normalization">
              --Wikipedia
            </a>
          </div>
          <div style={{ padding: "0 100px", textAlign: "justify" }}>
            Data normalization is a concept that has been around for many
            decades. It is fundamental in the design of databases that use
            tables and columns to maintain data relations and integrity, such as
            PostgreSQL. One example of normalized data is how we store
            relationships on our backend models - a post, for instance, knows
            when user it belongs to. If I edit the user, the post, doesn't
            change, it still references the same user, so post.user should
            return the correctly updated data.
          </div>
          <div style={{ margin: "40px", fontSize: "250%", lineHeight: "1em" }}>
            What Does it Mean to Normalize Frontend Data?
          </div>
          <div style={{ padding: "0 100px", textAlign: "justify" }}>
            The data on our Rails backends is normalized already, but the data
            we receive on our frontend is not. This is because of how we have to
            send data. It is usually best practice to limit the number of times
            we request data from ours or any API. Requests are slow and can be
            costly, especially at scale. One of the most common ways around this
            is to nest and serialize our data, packaging it while maintaining
            relationships. This is great for transferring data over the
            internet, but it turns out this structure is not ideal for
            JavaScript, especially when dealing with a lot of related, nested
            data.
          </div>

          <div style={{ padding: "0 100px", textAlign: "justify" }}>
            What we're going to do on the frontend is considered decompositonal
            normalization. We need to take the JSON data we've received from our
            backend and restructure it. Related data such as users, posts and
            comments get separated into their own 'tables', eliminating
            duplicate data. For instance, instead of a user having many comments
            and a post having many comments, comments have their own 'table',
            each one knows which user and which post it belongs to, and each
            user and post <i>also</i> know which comments they have by storing
            comment_ids.
          </div>

          <div style={{ margin: "40px", fontSize: "250%", lineHeight: "1em" }}>
            What Does Normalizing Data Actually Do to JSON Data?
          </div>

          <div style={{ padding: "0 100px", textAlign: "justify" }}>
            Anytime JSON data is received that we want to normalize, we run it
            through a function that checks through the data. If an object has an
            array of objects inside of it, and each object in the array has a
            unique id of some kind,{" "}
            <i>
              the entire array is converted into an object and each id inside
              becomes a key.{" "}
            </i>{" "}
            This new object full of other objects is placed side by side with
            the original parent object, instead of nested inside. The original
            array is replaced with an array of reference ids.
          </div>
          <div style={{ margin: "40px", fontSize: "250%", lineHeight: "1em" }}>
            Why Should You Normalize Your Data?
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr"
            }}
          >
            <div>
              <div style={{ fontSize: "150%" }}>Pros</div>
              <ul style={{ textAlign: "justify", margin: "5px" }}>
                <li>
                  Provides significant performance boosts on certain actions
                  when you are dealing with a lot of related, nested data
                  arrays. I.g. instant look up of records instead of iterating
                  through arrays, improving the speed of finding, validating,
                  updating and deleting data.
                </li>
                <li>
                  Maintains single source of truth for information on the
                  client. Edit a user, and all references to the user update.
                </li>
                <li>
                  Allows you to better manage data from your backend,
                  significantly reducing duplicate data while preserving data
                  relationships.
                </li>
                <li>
                  Allows you to reshape foreign API data you can't control to
                  make it more performant and compatible.
                </li>
                <li>
                  "De-nests" data, preventing O(n^2), double iteration
                  situations.
                </li>
                <li>Works very well with redux.</li>
              </ul>
            </div>
            <div>
              <div style={{ fontSize: "150%" }}>Cons</div>
              <ul style={{ textAlign: "justify", margin: "5px" }}>
                <li>
                  Can signifigantly change the structure of your data and all
                  functions related to it
                </li>
                <li>
                  You must normalize received JSON data before it is sent to
                  your reducers, making some redux actions more complex and
                  expensive.
                </li>
                <li>
                  Before you can normalize, you have to either build out a
                  'schema' for how you want data relationships to be maintained.
                  You must either use a package to do this,{" "}
                  <a href="https://github.com/paularmstrong/normalizr">
                    such as normalizr
                  </a>, or you need to build your own function for iterating and
                  reorganizing your incoming objects and arrays.
                </li>
                <li>
                  Is really only necessary to apply decompositonal normalization
                  on the frontend when using a SQL backend. In NoSQL backends,
                  you can shape your data however you please and can design your
                  data to be normalized from the beginning.
                </li>
                <li>
                  Makes passing down props from parent components more
                  complicated. Using Redux to access state directly resolves
                  this.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NormalizedDataInfo;
