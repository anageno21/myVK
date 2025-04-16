import React from 'react';

function FaqSection() {
  return (
    <section className="section-faq tf-spacing-3">
      <div className="tf-container">
        <div className="row justify-center">
          <div className="col-md-8">
            <div className="heading-section">
              <p className="text-2 sub">Help Center</p>
              <h3>Questions and Answers</h3>
              <p className="description text-1 lh-30">
                Find answers to the most commonly asked questions about our services.
              </p>
            </div>
            <div className="tf-accordion" id="accordion">
              <div className="tf-accordion-item">
                <div className="accordion-header">
                  <h5
                    className="title collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What types of therapy do you offer at Anageno?
                    <span className="icon"></span>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div className="tf-accordion-body">
                    <p>
                      Therapy is useful for managing stress, anxiety, or life challenges. It offers support and helps with personal growth. A consultation can help you decide if it's the right option.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tf-accordion-item">
                <div className="accordion-header">
                  <h5
                    className="title"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How do I know if therapy is right for me?
                    <span className="icon"></span>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordion"
                >
                  <div className="tf-accordion-body">
                    <p>
                      Therapy is useful for managing stress, anxiety, or life challenges. It offers support and helps with personal growth. A consultation can help you decide if it's the right option.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tf-accordion-item">
                <div className="accordion-header">
                  <h5
                    className="title collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What should I expect during my first therapy session?
                    <span className="icon"></span>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div className="tf-accordion-body">
                    <p>
                      Therapy is useful for managing stress, anxiety, or life challenges. It offers support and helps with personal growth. A consultation can help you decide if it's the right option.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tf-accordion-item">
                <div className="accordion-header">
                  <h5
                    className="title collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How long does a typical therapy session last?
                    <span className="icon"></span>
                  </h5>
                </div>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div className="tf-accordion-body">
                    <p>
                      Therapy is useful for managing stress, anxiety, or life challenges. It offers support and helps with personal growth. A consultation can help you decide if it's the right option.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tf-accordion-item">
                <div className="accordion-header">
                  <h5
                    className="title collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Do you offer online or virtual therapy sessions?
                    <span className="icon"></span>
                  </h5>
                </div>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div className="tf-accordion-body">
                    <p>
                      Therapy is useful for managing stress, anxiety, or life challenges. It offers support and helps with personal growth. A consultation can help you decide if it's the right option.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tf-accordion-item">
                <div className="accordion-header">
                  <h5
                    className="title collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How many therapy sessions will I need to see results?
                    <span className="icon"></span>
                  </h5>
                </div>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div className="tf-accordion-body">
                    <p>
                      Therapy is useful for managing stress, anxiety, or life challenges. It offers support and helps with personal growth. A consultation can help you decide if it's the right option.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;