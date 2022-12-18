// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

error KickStarter__NoEarnings();
error KickStarter__WithdrawFailed();

contract KickStarter {
    uint256 public totalProjects;

    struct Projects {
        address payable creator;
        string projectName;
        uint256 projectId;
        uint256 fundGoal;
        uint256 deadline;
        uint256 fundCollected;
        address[] donators;
        uint256[] donations;
    }

    Projects[] public projectsList;

    // Keeps track of projectId => data type Items
    mapping(uint256 => Projects) public projects;
    mapping(address => uint256) public crowdEarning;

    constructor() {
        fundTimer = 30 days;
    }

    function createProject(
        string memory _projectName,
        uint256 _fundGoal
    ) public {
        totalProjects++;
        projects[totalProjects] = Projects(
            _projectName,
            totalProjects,
            _fundGoal,
            payable(msg.sender),
            false,
            block.timestamp
        );
    }

    function fundProject(uint256 _projectId, uint256 _fundAmount) external {}

    function withdrawFund() external {
        uint256 userEarnings = crowdEarning[msg.sender];
        if (userEarnings <= 0) {
            revert KickStarter__NoEarnings();
        }
        crowdEarning[msg.sender] = 0;
        (bool success, ) = payable(msg.sender).call{value: userEarnings}("");
        //require(success, "Failed to withdraw earnings!");
        if (!success) {
            revert KickStarter__WithdrawFailed();
        }
    }

    function getDonators() {}

    function getAllProjects() {}
}
