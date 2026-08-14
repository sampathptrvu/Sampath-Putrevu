import re

with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

old_text = """        {/* Credibility Section */}
        <section className="credibility-row">
          <div className="credibility-strip credibility-inner flex-col md:flex-row flex-wrap min-[1100px]:flex-nowrap justify-center items-center gap-y-4 gap-x-4 md:gap-x-6 lg:gap-x-8 py-5 md:py-4 px-4 md:px-6">
            <p className="font-medium text-[18px] text-center leading-snug text-[#252724] whitespace-nowrap">
              Worked with founders and teams backed by
            </p>
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-6 min-[1100px]:gap-x-8">
              <a href="https://www.accel.com/" target="_blank" rel="noopener noreferrer" aria-label="Accel" className="flex-shrink-0 flex items-center justify-center">
                <img src={accelLogo} alt="" className="h-[24px] md:h-[26px] min-[1100px]:h-[22px] w-auto object-contain block" />
              </a>
              <a href="https://www.bvp.com/" target="_blank" rel="noopener noreferrer" aria-label="Bessemer" className="flex-shrink-0 flex items-center justify-center">
                <img src={bessemerLogo} alt="" className="h-[20px] md:h-[22px] min-[1100px]:h-[18px] w-auto object-contain block" />
              </a>
              <a href="https://www.redpoint.com/" target="_blank" rel="noopener noreferrer" aria-label="Redpoint" className="flex-shrink-0 flex items-center justify-center">
                <img src={redpointLogo} alt="" className="h-[28px] md:h-[30px] min-[1100px]:h-[24px] w-auto object-contain block" />
              </a>
              <a href="https://www.sequoiacap.com/" target="_blank" rel="noopener noreferrer" aria-label="Sequoia" className="flex-shrink-0 flex items-center justify-center">
                <img src={sequoiaLogo} alt="" className="h-[16px] md:h-[18px] min-[1100px]:h-[15px] w-auto object-contain block" />
              </a>
            </div>
          </div>
        </section>"""

new_text = """        {/* Credibility Section */}
        <section className="credibility-row">
          <div className="credibility-strip credibility-inner flex-col md:flex-row flex-wrap min-[1100px]:grid min-[1100px]:grid-cols-[auto_1fr] justify-center items-center gap-y-4 gap-x-4 md:gap-x-6 lg:gap-x-8 py-5 md:py-4 px-4 md:px-6">
            <p className="font-medium text-[18px] text-center leading-snug text-[#252724] whitespace-nowrap">
              Trusted by founders and teams backed by
            </p>
            <div className="flex flex-wrap md:flex-nowrap min-[1100px]:grid min-[1100px]:grid-cols-4 justify-center items-center gap-x-6 gap-y-4 md:gap-x-6 min-[1100px]:gap-x-0 w-full">
              <a href="https://www.accel.com/" target="_blank" rel="noopener noreferrer" aria-label="Accel" className="flex-shrink-0 flex items-center justify-center min-[1100px]:w-full">
                <img src={accelLogo} alt="" className="h-[24px] md:h-[26px] min-[1100px]:h-[22px] w-auto object-contain block" />
              </a>
              <a href="https://www.bvp.com/" target="_blank" rel="noopener noreferrer" aria-label="Bessemer" className="flex-shrink-0 flex items-center justify-center min-[1100px]:w-full">
                <img src={bessemerLogo} alt="" className="h-[20px] md:h-[22px] min-[1100px]:h-[18px] w-auto object-contain block" />
              </a>
              <a href="https://www.redpoint.com/" target="_blank" rel="noopener noreferrer" aria-label="Redpoint" className="flex-shrink-0 flex items-center justify-center min-[1100px]:w-full">
                <img src={redpointLogo} alt="" className="h-[28px] md:h-[30px] min-[1100px]:h-[24px] w-auto object-contain block" />
              </a>
              <a href="https://www.sequoiacap.com/" target="_blank" rel="noopener noreferrer" aria-label="Sequoia" className="flex-shrink-0 flex items-center justify-center min-[1100px]:w-full">
                <img src={sequoiaLogo} alt="" className="h-[16px] md:h-[18px] min-[1100px]:h-[15px] w-auto object-contain block" />
              </a>
            </div>
          </div>
        </section>"""

if old_text in content:
    content = content.replace(old_text, new_text)
    with open('src/HomePage.tsx', 'w') as f:
        f.write(content)
    print("Replaced successfully!")
else:
    print("Not found.")

