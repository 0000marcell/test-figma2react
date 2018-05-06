import React, { Component} from 'react'

class CClock extends Component {
  render() {
    return (
      <div>
        <div style={{"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:55"
            style={{"width":628.5506591796875,"marginLeft":-5.3664703369140625,"height":null,"marginTop":38.907081604003906,"marginBottom":36.89464569091797,"minHeight":213.31814575195312,"backgroundColor":"rgba(255, 0, 255, 1)","borderRadius":"26.832469940185547px 26.832469940185547px 26.832469940185547px 26.832469940185547px"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:57"
            style={{"width":297.8404235839844,"marginLeft":-59.70225524902344,"height":null,"marginTop":-199.9019012451172,"marginBottom":88.54714965820312,"minHeight":111.35475158691406,"color":"rgba(255, 255, 255, 1)","fontSize":96.59689331054688,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.time && this.props.time.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.time && (<div>
                <span style={{}} key="end">10:10</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":2,"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:58"
            style={{"width":79.689208984375,"marginLeft":268.18724060058594,"height":null,"marginTop":-185.81484508514404,"marginBottom":119.06338787078857,"minHeight":66.75145721435547,"color":"rgba(255, 255, 255, 1)","fontSize":32.19896697998047,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.seconds && this.props.seconds.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.seconds && (<div>
                <span style={{}} key="end">:10</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:59"
            style={{"width":64.45450592041016,"marginLeft":274.41854095458984,"height":null,"marginTop":-137.51639556884766,"marginBottom":87.1600341796875,"minHeight":50.356361389160156,"color":"rgba(255, 255, 255, 1)","fontSize":24.14922332763672,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.ampm && this.props.ampm.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.ampm && (<div>
                <span style={{}} key="end">PM</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv centerer">
          <div
            id="I13:13;12:60"
            style={{"marginLeft":61.04387283325195,"marginRight":631.0102739334106,"flexGrow":1,"marginTop":61.04387283325195,"marginBottom":204.59758758544922}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="15" height="23" viewBox="0 0 15 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="Canvas" fill="none">
<g id="Figma &#34;F&#34; 10&#195;&#151;15">
<g id="Rectangle 54">
<path d="M 0 3.91307C 0 1.75196 1.75194 0 3.91305 0C 6.07418 0 7.82614 1.75194 7.82614 3.91307C 7.82614 6.0742 6.07418 7.82614 3.91305 7.82614C 1.75194 7.82614 0 6.07417 0 3.91307Z" transform="translate(7.50002 7.49999) scale(0.958325)" fill="#1ABCFE"/>
</g>
<g id="Rectangle 55">
<path d="M 0 3.91307C 0 1.75194 1.75194 0 3.91307 0L 7.82614 0L 7.82614 3.91307C 7.82614 6.0742 6.0742 7.82614 3.91307 7.82614C 1.75194 7.82614 0 6.0742 0 3.91307Z" transform="translate(0 15) scale(0.958325)" fill="#0ACF83"/>
</g>
<g id="Rectangle 55_2">
<path d="M 0 0L 7.82614 0L 7.82614 3.91307C 7.82614 6.0742 6.0742 7.82614 3.91307 7.82614C 1.75194 7.82614 0 6.07419 0 3.91307L 0 0Z" transform="matrix(0 0.958325 0.958325 0 7.50002 2.92458e-05)" fill="#FF7262"/>
</g>
<g id="Rectangle 55_3">
<path d="M 0 3.91307C 0 1.75194 1.75194 0 3.91307 0L 7.82614 0L 7.82614 7.82614L 3.91307 7.82614C 1.75194 7.82614 0 6.0742 0 3.91307Z" transform="translate(0 7.49999) scale(0.958325 -0.958325)" fill="#F24E1E"/>
</g>
<g id="Rectangle 55_4">
<path d="M 0 3.91307C 0 1.75194 1.75194 0 3.91307 0L 7.82614 0L 7.82614 7.82614L 3.91307 7.82614C 1.75194 7.82614 0 6.0742 0 3.91307Z" transform="translate(0 15) scale(0.958325 -0.958325)" fill="#A259FF"/>
</g>
</g>
</g>
</svg>

`}} />
          </div>
        </div>
      </div>
    );
  }
}
export default CClock;

