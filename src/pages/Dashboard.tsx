import {
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    Grid2 as Grid,
    Slider,
    Stack,
    Tab,
    Tabs,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

export const DashboardContent = () => {
    const [tabValue, setTabValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={3}>
                    <Box display={"flex"} flexDirection={"column"} height={'100%'}>
                        <Card variant="outlined" sx={{ maxWidth: 360 }}>
                            <Box sx={{ p: 2 }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography gutterBottom variant="body1" component="div">
                                        Your keywords
                                    </Typography>
                                </Stack>
                            </Box>
                            <Divider />

                            <Box px={2} pt={2} >
                                <Box>
                                    <Typography gutterBottom variant="body1" fontWeight={'bold'} component="div">
                                        Education
                                    </Typography>
                                </Box>
                                <Box>
                                    <TextField id="outlined-basic" multiline rows={2} />
                                </Box>
                            </Box>

                            <Box sx={{ p: 2 }} gap={1}>
                                <Box>
                                    <Typography gutterBottom variant="body1" fontWeight={'bold'} component="div">
                                        Your skills
                                    </Typography>
                                </Box>
                                <Box>
                                    <TextField id="outlined-basic" />
                                </Box>
                                <Box pt={2}>

                                    <Stack direction="row" spacing={1}>
                                        <Chip color="primary" label="Soft" size="small" onDelete={() => { }} />
                                        <Chip color="primary" label="Soft" size="small" onDelete={() => { }} />
                                    </Stack>
                                </Box>
                            </Box>

                            <Box sx={{ p: 2 }} gap={1}>
                                <Box>
                                    <Typography gutterBottom variant="body1" fontWeight={'bold'} component="div">
                                        Interested skills
                                    </Typography>
                                </Box>
                                <Box>
                                    <TextField id="outlined-basic" />
                                </Box>
                                <Box pt={2}>

                                    <Stack direction="row" spacing={1}>
                                        <Chip color="primary" label="Soft" size="small" onDelete={() => { }} />
                                        <Chip color="primary" label="Soft" size="small" onDelete={() => { }} />
                                    </Stack>
                                </Box>
                            </Box>

                            <Box pt={2} px={2}>
                                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography gutterBottom variant="body1" fontWeight={'bold'} component="div">
                                        Time Limit:
                                    </Typography>
                                    <Box>
                                        <Typography gutterBottom variant="body2" component="div">
                                            2 Years
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>

                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        valueLabelDisplay="auto"
                                        shiftStep={30}
                                        step={10}
                                        marks
                                        min={10}
                                        max={110}
                                    />
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                </Grid>
                <Grid size={9}>
                    <Box display={"flex"} flexDirection={"column"} gap={1}>
                        <Box>
                            <Tabs
                                value={tabValue}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons={false}
                                aria-label="scrollable prevent tabs example"
                            >
                                <Tab label="Course" />
                                <Tab label="Books" />
                                <Tab label="Certificates" />
                                <Tab label="Universities" />
                            </Tabs>
                        </Box>
                        <Box>
                            <TabPanel value={tabValue} index={0}>
                                <Card variant="outlined">
                                    <CardContent>Course</CardContent>
                                </Card>
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <Card variant="outlined">
                                    <CardContent>Books</CardContent>
                                </Card>
                            </TabPanel>
                            <TabPanel value={tabValue} index={2}>
                                <Card variant="outlined">
                                    <CardContent>Certificates</CardContent>
                                </Card>
                            </TabPanel>
                            <TabPanel value={tabValue} index={3}>
                                <Card variant="outlined">
                                    <CardContent>Universities</CardContent>
                                </Card>
                            </TabPanel>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export const Dashboard = () => {
    return (
        <Container maxWidth="xl">
            <Box mt={2}>
                <DashboardContent />
            </Box>
        </Container>
    );
};
