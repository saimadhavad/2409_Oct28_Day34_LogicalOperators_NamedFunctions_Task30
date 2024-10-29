import React, { useRef } from 'react'

function StudentsTenthMarkSheet() {

        let firstNameInputRef = useRef();
        let lastNameInputRef = useRef();
        let teluguMarksInputRef = useRef();
        let hindiMarksInputRef = useRef();
        let englishMarksInputRef = useRef();
        let mathsuMarksInputRef = useRef();
        let scienceMarksInputRef = useRef();
        let socialMarksInputRef = useRef();

        let resultSpanRef =  useRef();
        let firstNameResultSpanRef = useRef();
        let lastNameResultSpanRef = useRef();
        let teluguResultSpanRef = useRef();
        let hindiResultSpanRef = useRef();
        let englishResultSpanRef =useRef();
        let mathsResultSpanRef = useRef();
        let scienceResultSpanRef = useRef();
        let socialResultSpanRef = useRef();

        let calculateResult = () => {
            let firstName  = firstNameInputRef.current.value;
            let lastName = lastNameInputRef.current.value;
            let teluguMarks = Number(teluguMarksInputRef.current.value);
            let hindiMarks = Number(hindiMarksInputRef.current.value);
            let englishMarks = Number(englishMarksInputRef.current.value);
            let mathsMarks = Number(mathsuMarksInputRef.current.value);
            let scienceMarks = Number(scienceMarksInputRef.current.value);
            let socialMarks = Number(socialMarksInputRef.current.value);

            let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;

            let percentage = (totalMarks/600)*100;

            resultSpanRef.current.innerHTML = `${firstName} ${lastName}'s total marks ${totalMarks} with (${percentage.toFixed(2)}%)`;
        }
        let firstNameOnFocus = () => {
            firstNameInputRef.current.style.backgroundColor = "#d7d2cc";
            // firstNameInputRef.current.style.margin ="8px 0";
            // firstNameInputRef.current.style.padding = "12px 20px";
            // firstNameInputRef.current.style.boxSizing = "border-box";
        }
        let firstNameOnBlur = () => {
            firstNameInputRef.current.style.backgroundColor = "";
            // firstNameInputRef.current.style.margin ="8px 0";
            // firstNameInputRef.current.style.padding = "12px 20px";
            // firstNameInputRef.current.style.boxSizing = "border-box";
        }
        let lastNameOnFocus = () => {
            lastNameInputRef.current.style.backgroundColor = "#d7d2cc";
        }
        let lastNameOnBlur = () => {
            lastNameInputRef.current.style.backgroundColor = "";
        }
        let teluguOnFocus = () => {
            teluguMarksInputRef.current.style.backgroundColor = "#d7d2cc";
        }
        let teluguOnChange = () => {
            let marks = teluguMarksInputRef.current.value;
            if( marks>=0 && marks<=100) {
                if(marks>=35) {
                    teluguResultSpanRef.current.innerHTML = "✔️ Pass";
                }else {
                    teluguResultSpanRef.current.innerHTML = "❌ Fail";
                }
            }
            else {
                teluguResultSpanRef.current.innerHTML = "❎ Invalid";
            }            
        }
        let telugunOnBlur = () => {
            teluguMarksInputRef.current.style.backgroundColor = "";
        }
        let hindiOnFocus = () => {
            hindiMarksInputRef.current.style.backgroundColor = "#d7d2cc";
        }
        let hindiOnChange = () => {
            let marks = hindiMarksInputRef.current.value;
            if(marks>=0 && marks<=100)
                if (marks>=35)
                {
                hindiResultSpanRef.current.innerHTML = "✔️ Pass";
                }
                else {
                hindiResultSpanRef.current.innerHTML = "❌ Fail";
                }
            else {
                hindiResultSpanRef.current.innerHTML = "❎ Invalid";
            }
        }
        let hindiOnBlur = () => {
            hindiMarksInputRef.current.style.backgroundColor ="";
        }
        let englishOnFocus = () => {
            englishMarksInputRef.current.style.backgroundColor ="#d7d2cc";
        }
        let englishOnChange = () => {
            let marks = englishMarksInputRef.current.value;
            if(marks>=0 && marks<=100) {
                if(marks>=35) {
                    englishResultSpanRef.current.innerHTML = "✔️ Pass";
                }
                else {
                    englishResultSpanRef.current.innerHTML = "❌ Fail";
                }
            }
            else {
                englishResultSpanRef.current.innerHTML = "❎ Invalid";
            }
        }
        let englishOnBlur = () => {
            englishMarksInputRef.current.style.backgroundColor ="";
        }
        let mathsOnFocus = () => {
            mathsuMarksInputRef.current.style.backgroundColor = "#d7d2cc";
        }
        let mathsOnChange = () => {
            let marks = mathsuMarksInputRef.current.value;
            if(marks>=0 && marks<=100) {
                if(marks>=35) {
                    mathsResultSpanRef.current.innerHTML ="✔️ Pass";
                }
                else {
                    mathsResultSpanRef.current.innerHTML ="❌ Fail";
                }
            }
            else {
                mathsResultSpanRef.current.innerHTML ="❎ Invalid";
            }
        }
        let mathsOnBlur = () => {
            mathsuMarksInputRef.current.style.backgroundColor = "";
        }
        let scienceOnFocus = () => {
            scienceMarksInputRef.current.style.backgroundColor = "#d7d2cc";
        }
        let scienceOnChange = () => {
            let marks = scienceMarksInputRef.current.value;
            if(marks>=0 && marks<=100) {
                if(marks>=35) {
                    scienceResultSpanRef.current.innerHTML ="✔️ Pass"
                }
                else {
                    scienceResultSpanRef.current.innerHTML ="❌ Fail";
                }
            }
            else {
                scienceResultSpanRef.current.innerHTML ="❎ Invalid";
            }
        }
        let scienceOnBlur = () => {
            scienceMarksInputRef.current.style.backgroundColor ="";
        }
        let socialOnFocus = () => {
            socialMarksInputRef.current.style.backgroundColor = "#d7d2cc";
        }
        let socialOnChange = () => {
            let  marks =socialMarksInputRef.current.value;
            if(marks>=0 && marks<=100) {
                if(marks>=35) {
                    socialResultSpanRef.current.innerHTML ="✔️ Pass";
                }
                else {
                    socialResultSpanRef.current.innerHTML ="❌ Fail";
                }
            }
            else {
                socialResultSpanRef.current.innerHTML ="❎ Invalid";
            }
        }
        let socialOnBlur = () => {
            socialMarksInputRef.current.style.backgroundColor = "";
        } 


  return (
    <div>
      <h1>Secondary Education MarkSheet</h1>
        <form>
            <div>
                <label>First name</label>
                <span className='colonSpacing'>:</span>
                <input type='text' ref={firstNameInputRef}
                        onFocus={ () => {firstNameOnFocus();}}
                        onBlur={ () => {firstNameOnBlur();}}
                ></input>
                <span className="resultSpanRef" ref={firstNameResultSpanRef}></span>
            </div>
            <div>
                <label>Last name</label>
                <span className='colonSpacing'>:</span>
                <input type='text' ref={lastNameInputRef}
                        onFocus={ ()=> {lastNameOnFocus();}}
                        onBlur={ () => {lastNameOnBlur();}}
                ></input>
                <span className="resultSpanRef" ref={lastNameResultSpanRef}></span>
            </div>
            <div>
                <label>Telugu</label>
                <span className='colonSpacing'>:</span>
                <input type='number' ref={teluguMarksInputRef}
                        onFocus={ () => {teluguOnFocus();}}
                        onChange={ () => {teluguOnChange();}}
                        onBlur={ () => {telugunOnBlur();}}
                ></input>
                <span className="resultSpanRef" ref={teluguResultSpanRef}></span>
            </div>
            <div>
                <label>Hindi</label>
                <span className='colonSpacing'>:</span>
                <input type='number' ref={hindiMarksInputRef}
                        onFocus={ () => {hindiOnFocus();}}
                        onChange={ () => {hindiOnChange();}}
                        onBlur={ () => {hindiOnBlur();}}
                ></input>
                <span className="resultSpanRef" ref={hindiResultSpanRef}></span>
            </div>
            <div>
                <label>English</label>
                <span className='colonSpacing'>:</span>
                <input type='number' ref={englishMarksInputRef}
                        onFocus={ () => {englishOnFocus();}}
                        onChange={ () => {englishOnChange();}}
                        onBlur={ () => {englishOnBlur();}}
                ></input>
                <span className="resultSpanRef" ref={englishResultSpanRef}></span>
            </div>
            <div>
                <label>Maths</label>
                <span className='colonSpacing'>:</span>
                <input type='number' ref={mathsuMarksInputRef}
                        onFocus={ ()=> {mathsOnFocus();}}
                        onChange={ () => {mathsOnChange();}}
                        onBlur={ () => {mathsOnBlur();}}
                ></input>
                <span className="resultSpanRef" ref={mathsResultSpanRef}></span>
            </div>
            <div>
                <label>Science</label>
                <span className='colonSpacing'>:</span>
                <input type='number' ref={scienceMarksInputRef}
                        onFocus={ () => {scienceOnFocus();}}
                        onChange={ ()=> {scienceOnChange();}}
                        onBlur={ () => {scienceOnBlur();}}
                ></input>
                <span className="resultSpanRef" ref={scienceResultSpanRef}></span>
            </div>
            <div>
                <label>Social</label>
                <span className='colonSpacing'>:</span>
                <input type='number' ref={socialMarksInputRef}
                        onFocus={ () => {socialOnFocus();}}
                        onChange={ () => {socialOnChange();}}
                        onBlur={ () => {socialOnBlur();}}
                ></input>
                <span className="resultSpanRef" ref={socialResultSpanRef}></span>
            </div>
            <div>
                <button type='button'
                    onClick={ () => {
                        calculateResult();
                    }}>Calculate Result
                </button>
            </div>
        </form>
        <div><label className='resultLabelDiv' ref={resultSpanRef}></label></div>
    </div>
  )
}

export default StudentsTenthMarkSheet
