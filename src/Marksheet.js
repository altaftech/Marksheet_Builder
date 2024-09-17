import React from "react";
import './Marksheet.css'
class Marksheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = { blank: "" }
    }

    componentDidMount() {
        const overlay = document.getElementById('overlay');
        const closeOverlay = document.getElementById('closeOverlay');

        closeOverlay.addEventListener('click', () => {
            overlay.style.display = 'none';
            this.resetForm();
        });

        // window.addEventListener('click', (event) => {
        //     if (event.target === overlay) {
        //         overlay.style.display = 'none';
        //     }
        // });
    }
    operate(e) {
        e.preventDefault();


        var M1 = parseInt(this.state.M1)
        var M2 = parseInt(this.state.M2)
        var M3 = parseInt(this.state.M3)
        var M4 = parseInt(this.state.M4)
        var M5 = parseInt(this.state.M5)
        var Sum = M1 + M2 + M3 + M4 + M5;
        this.setState({ Total: Sum })
        var Percentage = parseFloat((Sum / 500) * 100).toFixed(2);
        this.setState({ Average: Percentage + '%' })
        if (Percentage > 80) {
            this.setState({ Grade: 'First Class' })
            document.getElementById('grade').style.background = "green"


        } else if (Percentage > 50 && Percentage < 80) {
            this.setState({ Grade: 'Second Class' })
            document.getElementById('grade').style.background = "yellow"


        } else {
            this.setState({ Grade: 'Failed' })
            document.getElementById('grade').style.background = "red"


        }

        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';

    }

    resetForm() {
        this.setState({
            name1: '',
            M1: '',
            M2: '',
            M3: '',
            M4: '',
            M5: '',
            Total: '',
            Average: '',
            Grade: ''
        });
        document.getElementById('myForm').reset();
        document.getElementById('grade').style.background = '';
    }

    onChangeData(e) {
        this.setState({ [e.target.name]: e.target.value })
    }



    render() {
        return (
            <>
                <div id="overlay" class="overlay">
                    <div class="overlay-content">
                        <img id="closeOverlay" class="close" src="close.svg" alt="close" />
                        <img id="printOverlay" class="print" src="print.svg" alt="print" onClick={() => { window.print() }} />
                        <div className="container2">
                            <table>
                                <tr >
                                    <th colSpan={3} className="yellow">Student Name</th>
                                </tr>
                                <tr>
                                    <td colSpan={3} className="uname">{this.state.name1}</td>
                                </tr>
                            </table><br />
                            <table>
                                <tr className="green">
                                    <th>No.</th>
                                    <th>Subjects</th>
                                    <th>marks</th>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>English</td>
                                    <td>{this.state.M1}</td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>Hindi</td>
                                    <td>{this.state.M2}</td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>Math</td>
                                    <td>{this.state.M3}</td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>Physics</td>
                                    <td>{this.state.M4}</td>
                                </tr>
                                <tr>
                                    <td>5.</td>
                                    <td>Chemistry</td>
                                    <td>{this.state.M5}</td>
                                </tr>
                            </table><br />
                            <table>
                            <tr className="blue">
                                    <th>Total</th>
                                    <th>Percentage</th>
                                    <th>Class</th>
                                </tr>
                                <tr>
                                    <td>{this.state.Total}</td>
                                    <td>{this.state.Average}</td>
                                    <td id="grade">{this.state.Grade}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <br />
                <p>Result 2024</p>



                <div className="container">
                    <br />

                    <form onSubmit={this.operate.bind(this)} id="myForm">
                        <div className="flex"><label className="black">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </label><input type="text" name="name1" onChange={this.onChangeData.bind(this)} maxLength={20} required placeholder="Enter Your Name" /></div>
                        <br />
                        <hr />
                        <br />
                        <div className="flex"><label>English &nbsp;&nbsp;&nbsp; : </label><input type="number" min={1} max={100} name="M1" onChange={this.onChangeData.bind(this)} required placeholder="Enter your marks" /></div>
                        <br />
                        <div className="flex"><label>Hindi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </label><input type="number" min={1} max={100} name="M2" onChange={this.onChangeData.bind(this)} required placeholder="Enter your marks" /></div>
                        <br />
                        <div className="flex"><label>Math &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </label><input type="number" min={1} max={100} name="M3" onChange={this.onChangeData.bind(this)} required placeholder="Enter your marks" /></div>
                        <br />
                        <div className="flex"><label>Physics &nbsp;&nbsp;&nbsp; : </label><input type="number" min={1} max={100} name="M4" onChange={this.onChangeData.bind(this)} required placeholder="Enter your marks" /></div>
                        <br />
                        <div className="flex"><label>Chemistry : </label><input type="number" min={1} max={100} name="M5" onChange={this.onChangeData.bind(this)} required placeholder="Enter your marks" /></div>
                        <br />
                        <div className="center">
                            <input type="submit" id="small" value="Submit" />
                        </div>
                    </form>


                </div>

            </>
        )
    }
}
export default Marksheet
