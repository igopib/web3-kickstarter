// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

error KickStarter__NoEarnings();
error KickStarter__WithdrawFailed();

contract KickStarter {
    uint256 public totalProjects;

    struct Projects {
        address creator;
        string projectName;
        uint256 fundGoal;
        uint256 deadline;
        uint256 fundCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    Projects[] public projectsList;

    // Keeps track of projectId => data type Items
    mapping(uint256 => Projects) public projects;
    mapping(address => uint256) public creatorEarning;



    function createProject(
        address _creator,
        string memory _projectName,
        uint256 _fundGoal,
        uint256 _deadline,
        uint256 fundCollected,
        string memory _image
    ) public returns (uint256) {
        Projects storage project = projects[totalProjects];

        require(
            project.deadline < block.timestamp,
            "Deadline should be a future date!"
        );

        project.creator = _creator;
        project.projectName = _projectName;
        project.fundGoal = _fundGoal;
        project.deadline = _deadline;
        project.fundCollected = 0;
        project.image = _image;

        totalProjects++;

        return totalProjects - 1;
    }

    function fundProject(
        uint256 _projectId,
    ) public payable {
        uint256 amount = msg.value;

        Projects storage project = projects[_projectId];

        project.donators.push(msg.sender);
        project.donations.push(amount);

        creatorEarning[project.creator] = creatorEarning[project.creator] + amount;
    }

    // function withdrawFund() external {
    //     uint256 userEarnings = crowdEarning[msg.sender];
    //     if (userEarnings <= 0) {
    //         revert KickStarter__NoEarnings();
    //     }
    //     crowdEarning[msg.sender] = 0;
    //     (bool success, ) = payable(msg.sender).call{value: userEarnings}("");
    //     //require(success, "Failed to withdraw earnings!");
    //     if (!success) {
    //         revert KickStarter__WithdrawFailed();
    //     }
    // }

    function getDonators() {}

    function getAllProjects() {}
}
