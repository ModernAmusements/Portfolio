---
createdAt: 2023-07-07T19:32:39.095Z
title: Vuejs Summarized
description: At its core, it provides a way to build components that encapsulate
  data or state in your JavaScript and then connect that state reactively to a
  template in HTML
color: '#ff9393'
media_uploader: /uploads/general-manual.pdf
testimonials:
  - quote: Everything is awesome!
    image: /img/vue-mvvm.png
---

By implementing the MVVM pattern, Vue.js offers the possibility of data binding, so that outputs and inputs are directly coupled to the data source. This eliminates the need to manually retrieve the data (e.g. via jQuery) from the HTML DOM.

We call these components declarative views because the same data inputs will always produce the same output in the visual UI

When we declare data on this data object it links or binds it to the HTML. In the template above when the value of the data changes the component will automatically rerender or in other words it's reactive. The framework does a ton of work under the hood to make sure that this process is performance across a huge component tree.

![VueJS](/img/vue-example-file.png 'VueJS')

Model View ViewModel (MVVM) is a design pattern and a variant of the Model View Controller (MVC) pattern.
It is used to separate the representation and logic of the user interface (UI).
Compared to the MVC pattern, the implementation effort can be reduced because no separate controller instances are required.

![MVVM](/img/vue-mvvm.png 'MVVM')

MVVM allows separation of roles between UI designers and developers, allowing application layers to be developed by different workgroups.
can be developed by different workgroups. Designers can focus on user experience
and developers can write the UI and business logic.
