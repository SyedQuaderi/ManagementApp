import React, {useState, useEffect, useRef} from 'react';
import {Container, Row, Col, Button, InputGroup, FormControl, Table, Pagination, Spinner, Form} from 'react-bootstrap';
import {IoIosSearch} from 'react-icons/io';
import {TiArrowSortedDown} from 'react-icons/ti';
import useSortingHook from '../../Common/Resource/AppSpecific/CustomHooks/useSortingHook';
import ConfirmDeleteModal from '../../Common/Resource/AppSpecific/Modal/ConfirmDeleteModal';
import {Link} from "react-router-dom";

function Clients(props) {
    let wards:any = [{name: 'Mark', wardActive: 22}, {name: 'Jason', wardActive: 20}, {name: 'Johnson', wardActive: 1}, {name: 'Ashley', wardActive: 2},
                    {name: 'Kallis', wardActive: 100}, {name: 'Micheal', wardActive: 99}, {name: 'Jackson', wardActive: 98}, {name: 'Smith', wardActive: 97},
                    {name: 'Abdul', wardActive: 96}, {name: 'system', wardActive: 95}, {name: 'wards', wardActive: 94}, {name: 'Serena', wardActive: 93},
                    {name: 'Chuck', wardActive: 92}, {name: 'Julia', wardActive: 91}, {name: 'Anthony', wardActive: 90}, {name: 'Brad', wardActive: 90},
                    {name: 'Qunini', wardActive: 89}, {name: 'Amanda', wardActive: 88}, {name: 'Rose', wardActive: 87}, {name: 'Sunil', wardActive: 86},
                    {name: 'Chucky', wardActive: 85}, {name: 'Julian', wardActive: 84}, {name: 'Anthonyia', wardActive: 83}, {name: 'Braden', wardActive: 82},
                    {name: 'Quninia', wardActive: 81}, {name: 'Amandy', wardActive: 80}, {name: 'Rosey', wardActive: 79}, {name: 'Sunny', wardActive: 78}];
    
    const [filteredData, setFilteredData] = useState<any>([]);
    const {sortedList, sortField, sortedField} = useSortingHook(filteredData);
    const [searchInput, setSearchInput] = useState<any>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [show, setShow] = useState<boolean>(false);    
    const [btnDisabled, setDisabled] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const [title, body] = ["Delete Ward", "Do you want to delete the ward?"]

    useEffect(() => {
        props.page('Clients');
        if(sortedField) {
            setFilteredData(sortedList);
        }
    }, [sortedField])

    const getClassNamesFor =(key:String) => {
        if(!sortedField) {
            return;
        }
        return sortedField.key === key ? sortedField.direction : undefined; 
    };

    const [paginationwards, setPaginationWards] = useState<any>([]);

    function globalSearch (e:any) {
        e.preventDefault();
        setSearchInput(e.target.value);
        let filteredItems:any = paginationwards.filter(value => {
          return (
            value.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            value.wardActive.toString().toLowerCase().includes(e.target.value.toLowerCase()) 
          );
        });
        setFilteredData(filteredItems);
    };

    const [pages, setPagination] = useState<any>([]);
    const [pageNumber, setNumber] = useState<any>(0);
    const [pageCounter, SetPageCounter] = useState<any>({start: 1, end: 10, page: 0, pageNum: 0});
    const pageCount = useRef<any>(0);

    useEffect(() => {
        setLoading(true);
        setTimeout(()=>{
            const filedsPerPage:number = (wards.length * 10) / wards.length;
            const pages:number = Math.round(wards.length / 10);
            pageCount.current = pages;
            const start:number = pageNumber * filedsPerPage;
            const wardpage:any = wards.slice(start, start + 10);
            SetPageCounter({start, end: start + wardpage.length, page: pages, pageNum: pageNumber});
            setFilteredData([...wardpage]);
            setPaginationWards([...wardpage]);
            let items:any = [];
            for (let number:number = 0; number <= pages -1; number++) {
                items.push(<Pagination.Item key={number} onClick={()=>setPageNumber(number)} active={number === pageNumber}>
                    {number +1}
                    </Pagination.Item>,)
                setPagination([...items]);
            }
            setLoading(false);
        }, 100)
        
    }, [pageNumber]);

    function setPageNumber(num) {
        if(num >= 0 && num <= (pageCount.current-1) ) {
            setNumber(num);
        }
    }

    const wardIndex = useRef<number>(0);

    function editWardDetails(ward: any) {
        const accordin:any = document.getElementsByClassName('ward');
        accordin[0].classList.toggle('show');
        const data = [...filteredData];
        const editElementFound = data.find(function(obj:any) {if(obj!== null) { return obj.name === ward.name} return 0;});
        wardIndex.current = data.findIndex(function(obj:any) {if(obj!==null) {return obj.name === ward.name} return 0;});
        if(editElementFound !== undefined) {
            const wardName:any = document.getElementById('ward-name');
            const wardActive:any = document.getElementById('ward-active');
            wardName.value = editElementFound.name;
            wardActive.value = editElementFound.wardActive;

            if (wardActive.value > 0) {
                setDisabled(true);
            } else {
                setDisabled(false);
            }
        } 
        return;
    } 

    function saveWardDetails() {
        const data = [...filteredData];
        const wardName:any = document.getElementById('ward-name');
        const wardActive:any = document.getElementById('ward-active');
        if(wardIndex.current !== -1 ) {
            data[wardIndex.current].name = wardName.value;
            data[wardIndex.current].wardActive = wardActive.value;
            setFilteredData([...data]);
            const accordin:any = document.getElementsByClassName('ward');
            accordin[0].classList.remove('show');
        }
    }

    function deleteWard() {
        const data = [...filteredData];
        if (wardIndex.current !== -1) {           
            data.splice(wardIndex.current, 1);
            setFilteredData([...data]);
            const accordin:any = document.getElementsByClassName('ward');
            accordin[0].classList.remove('show');
            setShow(false);
        }
    }

    return (
        <Container fluid={true} className="clients-main-content">
            <div className="accordion">
                <Row className="mt-2 collapse ward">
                    <Col xs={3} md={2} >
                    </Col>
                    <Col xs={6} md={6}>
                    <Form>
                        <h2 className="text-center">Edit Ward</h2>
                        <Form.Group as={Row} controlId="ward-name">
                            <Form.Label column sm={2}>
                            Ward Name
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text"  placeholder="Ward Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="ward-active">
                            <Form.Label column sm={2}>
                            HL7 Code
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text"  placeholder="HL7 Code" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={{ span: 9, offset: 2 }}>
                            <Button onClick={()=>saveWardDetails()}>Save</Button>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Delete Ward
                        </Form.Label>
                        <Col sm={{ span: 3 }} md={2}>
                            <Button disabled={btnDisabled} onClick={() => setShow(true)}>Confirm Delete</Button>
                        </Col>
                        <Form.Label column sm={{ span: 7 }} className={btnDisabled ? '' : 'hideDeleteLabel'}>
                            You are unable to delete the ward as there are still Rooms assigned to it. Please re-assign or delete all rooms.
                        </Form.Label>
                        </Form.Group>
                    </Form>
                    </Col>
                    <Col xs={3} md={2}></Col>
                </Row>
            </div>
            {loading ? (<Spinner className="spinner-custom" animation="border" variant="primary" />) : (
                <>
                    <Row>
                        <Col>
                            <h3 className="pt-2">Wards</h3>
                        </Col>
                        <Col md={{ span: 3, offset: 6 }} className="text-right">
                            <Link to="/Settings/Clients/AddWards"><Button>Add new Room</Button></Link>
                        </Col>
                        <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><IoIosSearch/></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon1" 
                            value={searchInput}
                            onChange={(e:any)=>globalSearch(e)}/>
                        </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th onClick={()=>sortField('name')} className={getClassNamesFor('name')}>Name<TiArrowSortedDown/></th>
                                <th onClick={()=>sortField('wardActive')} className={getClassNamesFor('wardActive')}>Active Rooms<TiArrowSortedDown/></th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((ward, i)=>
                                   <tr key={i}>
                                   <td>{ward.name}</td>
                                   <td>{ward.wardActive}</td>
                                   <td className="btn-link" onClick={()=>editWardDetails(ward)}>edit</td>
                                   </tr>  
                                )}
                            </tbody>
                        </Table>
                    </Row>
                    <div>
                        <p>showing {pageCounter.start+1} - {pageCounter.end} of {wards.length}</p>
                    </div>
                    <Pagination>
                        <Pagination.First onClick={()=>setPageNumber(0)}/>
                        <Pagination.Prev onClick={()=>setPageNumber(pageCounter.pageNum-1)}/>
                        {pages}
                        <Pagination.Next onClick={()=>setPageNumber(pageCounter.pageNum+1)}/>
                        <Pagination.Last onClick={()=>setPageNumber(pageCounter.page-1)}/>
                    </Pagination>
                    <>
                        <ConfirmDeleteModal show={show} handleClose={handleClose} deleteWard={deleteWard} title={title} body={body} />
                    </>
                </>
            )}
        </Container>
    )
}

export default React.memo(Clients);